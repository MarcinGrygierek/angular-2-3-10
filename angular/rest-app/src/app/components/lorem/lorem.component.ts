import { Component, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-lorem',
  imports: [],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.scss'
})
export class LoremComponent {
  private random = inject(RandomService);
  value = this.random.getValue();
}
