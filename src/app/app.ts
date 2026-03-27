import { Component, signal, inject} from '@angular/core';
import { TodoList } from './features/todo-list/todo-list';
import { AuthService } from './core/auth';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  authService = inject(AuthService);
  protected readonly title = signal('test-angular');
}
