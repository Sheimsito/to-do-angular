import { Component, signal, computed} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  tareas = signal([
    { id: 1, texto: 'Aprender Angular', completada: false },
    { id: 2, texto: 'Hacer una Todo App', completada: false },
    { id: 3, texto: 'Dominar Tailwind', completada: false },
  ]);

  filtroActivo = signal<'todas' | 'pendientes' | 'completadas'>('todas');

  tareasFiltradas = computed(() => {
    if(this.filtroActivo() === 'pendientes'){
      return this.tareas().filter(tarea => !tarea.completada)
    }
    else if(this.filtroActivo() === 'completadas'){
      return this.tareas().filter(tarea => tarea.completada)
    }
    else{
      return this.tareas()
    }
  })




  toggleCompletada(id: number): void {
    this.tareas.update(tareas => tareas.map(tarea => tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea))
  }

  nuevaTarea = '';

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      const nuevaTarea = {
        id: Date.now(),
        texto: this.nuevaTarea,
        completada: false
      };
      this.tareas.update(tareas => [...tareas, nuevaTarea]);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(id:number): void{
    this.tareas.update(tareas => tareas.filter(t => t.id !== id))
  }

  tareasPendientes = computed(() => this.tareas().filter(tarea => !tarea.completada).length)
}
