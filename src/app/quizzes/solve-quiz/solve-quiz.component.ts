import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '../quiz/quiz.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-solve-quiz',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './solve-quiz.component.html',
  styleUrl: './solve-quiz.component.css'
})
export class SolveQuizComponent {
  @Input({required: true}) quiz!: Quiz;
  @Output() cancel = new EventEmitter<void>();
  @Output() solve = new EventEmitter<number>();

  selectedOption?: number = undefined;

  onOptionClick(answerIdx: number) {
    this.selectedOption = answerIdx;
 }

  onCancel() {
    this.cancel.emit();
  }

  onSolve() {
    this.solve.emit(this.selectedOption);
  }

}
