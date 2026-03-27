import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Todo } from '../../core/todo.model';
import { TruncatePipe } from '../../shared/truncate-pipe';


@Component({
  selector: 'app-todo-item',
  imports: [ RouterLink, DatePipe, TruncatePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() tarea!: Todo;

  @Output() toggleTarea = new EventEmitter<number>();
  @Output() eliminarTarea = new EventEmitter<number>();

  onToggle(): void {
  this.toggleTarea.emit(this.tarea.id);
  }

  onEliminar(): void {
    this.eliminarTarea.emit(this.tarea.id);
  }
}
