import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-actions',
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  private data = inject(DataService);

  addElement() {
    this.data.addElement(`Lorem ipsum ${Math.round(Math.random() * 100000)}`)
  }
}
