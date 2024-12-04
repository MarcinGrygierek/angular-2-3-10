import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, map, mergeMap, Observable, switchMap, timer } from 'rxjs';
import { InputComponent } from '../input/input.component';

const RESTRICTED_DOMAINS = ['@koszmail.pl', '@onionmail.com', '@gmail.com'];

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, AsyncPipe, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);

  auth = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  validateEmail(userEmail: string): Observable<boolean> {
    console.log('CALLING API SERVICE', userEmail);
    return timer(Math.round(Math.random() * 2000))
      .pipe(map(_ => !RESTRICTED_DOMAINS.some(domain => userEmail.includes(domain))))
  }

  isEmailCorrect$ = this.auth.controls.login.valueChanges
    .pipe(
      debounceTime(300),
      switchMap(userEmail => this.validateEmail(userEmail || ''))
    );

  handleSubmit() {
    if (this.auth.invalid) return;

    this.auth.reset();

    console.log(this.auth);
  }
}
