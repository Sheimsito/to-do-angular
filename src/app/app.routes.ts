import { Routes } from '@angular/router';
import { TodoList } from './features/todo-list/todo-list';
import { About } from './features/about/about';
import { TodoDetail } from './features/todo-detail/todo-detail';

export const routes: Routes = [

    {path: '', component: TodoList},
    {path: 'about', component: About},
    {path: 'todo/:id', component: TodoDetail},
    {path: '**', redirectTo: ''}

];
