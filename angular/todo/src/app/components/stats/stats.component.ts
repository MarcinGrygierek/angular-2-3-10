import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent {
  private taskService = inject(TaskService);
  public count = computed(() => this.taskService.tasks().length)
}
