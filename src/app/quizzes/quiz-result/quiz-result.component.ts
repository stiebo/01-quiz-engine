import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css'
})
export class QuizResultComponent {
  @Input({required: true}) isSolved!: boolean;
  @Output() cancel = new EventEmitter<void>();


  onCancel() {
    this.cancel.emit();
  }

}
