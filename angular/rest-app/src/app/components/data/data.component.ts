import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataDisplayComponent } from '../data-display/data-display.component';

@Component({
  selector: 'app-data',
  imports: [DataDisplayComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent {
  private data = inject(DataService);
  elements: number[] = [...this.data.elements];

  addElement() {
      this.elements = [...this.elements, (Math.round(Math.random() * 100))]
  }
}
