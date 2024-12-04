import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  auth = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  handleRegister() {
    if (this.auth.invalid) return;

    const { email, password } = this.auth.value;

    if(!email || !password) return;

    console.log(this.auth.value);

    this.authService.register({
      email, 
      password
    }).subscribe();

    this.auth.reset();
  }
}
