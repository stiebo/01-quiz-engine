import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { type User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, QuizzesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUser?: User;

  constructor(private userService: UserService) {}

  get users(): User[] {
    return this.userService.getUsers();
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
