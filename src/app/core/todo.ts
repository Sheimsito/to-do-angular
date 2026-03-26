import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoApi, Todo} from './todo.model'

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(){
    this.cargarTareas();
  }


  tareas = signal(<Todo[]>([]));

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

  agregarTarea(texto: string): void {
    if (texto.trim()) {
      const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false
      };
      this.tareas.update(tareas => [...tareas, nuevaTarea]);
    }
  }

  eliminarTarea(id:number): void{
    this.tareas.update(tareas => tareas.filter(t => t.id !== id))
  }

  tareasPendientes = computed(() => this.tareas().filter(tarea => !tarea.completada).length)

  cargando = signal(false)
  error = signal<string | null>(null);

  cargarTareas(): void{
    this.cargando.set(true)
    this.http.get<TodoApi[]>(`${this.apiUrl}?_limit=10`).subscribe({
      next: tareasAPI => {
      const tareas = tareasAPI.map( t => ({
        id: t.id,
        texto: t.title,
        completada: t.completed
      }));
      this.tareas.set(tareas)
      this.cargando.set(false)
    },
    error: () => {
      this.error.set('Error al cargar las tareas, intenta de nuevo más tarde.')
      this.cargando.set(false)
    }

    });

  }

}


