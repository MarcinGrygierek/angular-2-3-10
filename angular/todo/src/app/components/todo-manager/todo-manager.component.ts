import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { ActionsComponent } from '../actions/actions.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-todo-manager',
  imports: [ListComponent, ActionsComponent, StatsComponent],
  templateUrl: './todo-manager.component.html',
  styleUrl: './todo-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoManagerComponent {

}
