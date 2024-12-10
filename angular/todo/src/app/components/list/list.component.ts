import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TaskType } from '../../types/task';
import { ElementComponent } from '../element/element.component';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list',
  imports: [ElementComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private taskService = inject(TaskService);
  public tasks = this.taskService.tasks;
}
