import { Component, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent {
  private randomService = inject(RandomService);
  value = this.randomService.getValue();
}
