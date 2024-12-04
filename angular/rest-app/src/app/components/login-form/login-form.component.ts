import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  auth = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  handleLogIn() {
    if (this.auth.invalid) return;

    const { email, password } = this.auth.value;

    if(!email || !password) return;

    console.log(this.auth.value);

    this.authService.login({
      email, 
      password
    }).subscribe();

    this.auth.reset();
  }
}
