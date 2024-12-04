import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  imports: [],
  templateUrl: './input-errors.component.html',
  styleUrl: './input-errors.component.scss'
})
export class InputErrorsComponent {
  @Input()
  errors: ValidationErrors | null = null;

  hasAnyError() {
    // const field = this.group.get(this.name);

    // if (!field || field.untouched) return false;

    return !!this.errors;
  }

  hasError(error: string) {
    if (!this.errors) return false;

    return !!this.errors[error];
  }

  getError(error: string) {
    if (!this.errors || !this.errors[error]) return {};

    return this.errors[error];
  }
}
