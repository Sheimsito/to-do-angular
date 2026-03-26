import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';
import { TodoService } from '../../core/todo';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})

export class TodoList {
  todoService = inject(TodoService);
  nuevaTarea = '';

  agregarTarea(): void {
    this.todoService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
  }

  toggleCompletada(id: number): void{
    this.todoService.toggleCompletada(id)
  }

  eliminarTarea(id: number): void{
    this.todoService.eliminarTarea(id)
  }
}