import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() tarea!: { id: number; texto: string; completada: boolean };

  @Output() toggleTarea = new EventEmitter<number>();
  @Output() eliminarTarea = new EventEmitter<number>();

  onToggle(): void {
  this.toggleTarea.emit(this.tarea.id);
  }

  onEliminar(): void {
    this.eliminarTarea.emit(this.tarea.id);
  }
}
