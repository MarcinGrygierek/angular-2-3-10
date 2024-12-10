import { Component, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  private randomService = inject(RandomService);
  value = this.randomService.getValue();
}
