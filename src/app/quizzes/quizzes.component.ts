import { Component, Input } from '@angular/core';
import { type User } from '../user/user.model';
import { type Quiz } from './quiz/quiz.model';
import { QuizzesService } from './quizzes.service';
import { QuizComponent } from "./quiz/quiz.component";

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {
  @Input({required: true}) selectedUser!: User;

  constructor(private quizzesService: QuizzesService) {}

  get userName() {
    return this.selectedUser.name;
  }

  get selectedUserQuizzes(): Quiz[]  {
    return this.quizzesService.getOpenQuizzesByUserId(this.selectedUser.id);
  }

}
