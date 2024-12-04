import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    first: [0, Validators.required],
    second: [0, Validators.required]
  })

  // sum$: Observable<number> = this.form.valueChanges
  //   .pipe(
  //     map(({ first, second }) => (first || 0) + (second || 0))
  //   )

  // product$: Observable<number> = this.form.valueChanges
  //   .pipe(
  //     map(({ first, second }) => (first || 0) * (second || 0))
  //   )

  result$: Observable<[number, number]> = this.form.valueChanges
    .pipe(
      map(({ first, second }) => [
        (first || 0) + (second || 0),
        (first || 0) * (second || 0)
      ])
    )
}
