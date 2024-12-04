import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { InputErrorsComponent } from '../input-errors/input-errors.component';
import { FieldContainerComponent } from '../field-container/field-container.component';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, InputErrorsComponent, FieldContainerComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input()
  type: 'text' | 'password' = 'text';

  @Input()
  label: string = '';

  @Input()
  name: string = '';

  @Input()
  group!: FormGroup;

  public get errors(): null | ValidationErrors {
    const field = this.group.get(this.name);

    if (!field || field.untouched) return null;

    return field.errors;
  }
}
