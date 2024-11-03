import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { type User } from './user.model';
import { QuizzesComponent } from '../quizzes/quizzes.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() selectThisUser = new EventEmitter<User>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectThisUser() {
    this.selectThisUser.emit(this.user);
  }

}
