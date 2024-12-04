import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { InputErrorsComponent } from '../input-errors/input-errors.component';
import { FieldContainerComponent } from '../field-container/field-container.component';

@Component({
  selector: 'app-textarea',
  imports: [ReactiveFormsModule, FieldContainerComponent, InputErrorsComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
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

