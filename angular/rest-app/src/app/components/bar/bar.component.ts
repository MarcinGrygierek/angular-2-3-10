import { Component, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-bar',
  imports: [],
  providers: [RandomService],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  private random = inject(RandomService);
  value = this.random.getValue();
}
