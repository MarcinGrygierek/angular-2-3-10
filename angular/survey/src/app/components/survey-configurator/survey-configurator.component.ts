import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-survey-configurator',
  imports: [ReactiveFormsModule, InputComponent, TextareaComponent],
  templateUrl: './survey-configurator.component.html',
  styleUrl: './survey-configurator.component.scss'
})
export class SurveyConfiguratorComponent {
  private fb = inject(FormBuilder);
  private mockApi = inject(MockApiService);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(16)]],
    questions: this.fb.array([
      this.fb.group({
        question: ['', Validators.required]
      })
    ])
  })

  get questions() {
    return this.form.controls.questions.controls
  }

  addNewQuestion() {
    const newQuestionForm = this.fb.group({
      question: ['', Validators.required]
    })

    this.form.controls.questions.push(newQuestionForm);
  }

  removeQuestion(indexToDelete: number) {
    if (this.form.controls.questions.length <= 1) return;
    this.form.controls.questions.removeAt(indexToDelete);
  }

  handleSubmit() {
    if (this.form.invalid) return;

    const { title, description, questions } = this.form.value;

    if (!title || !description || !questions || questions.length === 0) return;

    const parsedQuestions = questions.filter(singleQuestion => !!singleQuestion.question) as {
      question: string
    }[]

    this.mockApi.saveSurvey({
      title,
      description,
      questions: parsedQuestions
    });
  }
}
