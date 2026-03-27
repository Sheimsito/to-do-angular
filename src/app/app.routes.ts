import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/todo-list/todo-list').then(m => m.TodoList) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./features/about/about').then(m => m.About) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./features/login/login').then(m => m.Login) 
  },
  { 
    path: 'todo/:id', 
    loadComponent: () => import('./features/todo-detail/todo-detail').then(m => m.TodoDetail),
    canActivate: [authGuard] 
  },
  { path: '**', redirectTo: '' }
];