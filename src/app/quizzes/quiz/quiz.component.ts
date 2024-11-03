import { Component, Input } from '@angular/core';
import { type Quiz } from './quiz.model';
import { type User } from '../../user/user.model';
import { CardComponent } from '../../shared/card/card.component';
import { SolveQuizComponent } from '../solve-quiz/solve-quiz.component';
import { QuizResultComponent } from '../quiz-result/quiz-result.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CardComponent, SolveQuizComponent, QuizResultComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  isSolvingQuiz = false;
  isQuizResults = false;
  isQuizSolved?: boolean = undefined;
  @Input({required: true}) quiz!: Quiz;
  @Input({required: true}) user!: User;
 
  onCompleteQuiz()  {
    this.isSolvingQuiz = true;
  }

  onCancelQuiz() {
    this.isSolvingQuiz = false;
  }

  onSolveQuiz(answerIdx: number) {
    this.isSolvingQuiz = false;
    this.isQuizSolved = this.quiz.correctAnswerIndex === answerIdx;
    this.isQuizResults = true;
  }

  onCancelQuizResults() {
    this.isQuizResults = false;
    if (this.isQuizSolved === false) {
      this.isSolvingQuiz = true;
      
    } else {
      this.user.solvedQuizIds.push(this.quiz.id);
    }
  }
}
