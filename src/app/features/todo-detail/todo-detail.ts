import { Component, inject, Injector, OnInit, signal, computed} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../core/todo';
import { Todo } from '../../core/todo.model';


@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail {

  private route = inject(ActivatedRoute);
  todoService = inject(TodoService)

  tarea = computed( () => {
    const id = Number( this.route.snapshot.paramMap.get('id'));
    return this.todoService.tareas().find(t => t.id === id) ?? null;
  } )


}
