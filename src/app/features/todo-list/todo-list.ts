import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';
import { TodoService } from '../../core/todo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink ,TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})

export class TodoList {
  todoService = inject(TodoService);
  nuevaTarea = '';


  tareaControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50)
  ]);


  agregarTarea(): void {
    this.todoService.agregarTarea(this.tareaControl.value!);
    this.tareaControl.reset();
  }

  toggleCompletada(id: number): void{
    this.todoService.toggleCompletada(id)
  }

  eliminarTarea(id: number): void{
    this.todoService.eliminarTarea(id)
  }
}