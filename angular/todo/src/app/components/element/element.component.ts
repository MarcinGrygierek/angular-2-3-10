import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TaskType } from '../../types/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-element',
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent {
  private taskService = inject(TaskService);

  task = input.required<TaskType>();

  deleteTask() {
    const idToDelete = this.task().id;
    this.taskService.deleteTask(idToDelete);
  }
}
