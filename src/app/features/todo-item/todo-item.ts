import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-todo-item',
  imports: [ RouterLink],
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
