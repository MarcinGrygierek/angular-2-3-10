import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataDisplayComponent {
  @Input()
  elements: number[] = [];
}
