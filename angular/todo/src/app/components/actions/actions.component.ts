import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-actions',
  imports: [ReactiveFormsModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent {
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  taskForm = this.fb.group({
    name: ['', Validators.required]
  })

  handleSubmit() {
    if (this.taskForm.invalid) return;

    const { name } = this.taskForm.value;

    if (!name) return;

    this.taskService.addNewTask(name);
    this.taskForm.reset();
  }
}
