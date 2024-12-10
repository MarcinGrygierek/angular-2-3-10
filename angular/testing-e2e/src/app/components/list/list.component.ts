import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ElementComponent } from '../element/element.component';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'app-list',
  imports: [ElementComponent, ActionsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private dataService = inject(DataService);
  elements = this.dataService.data;
}
