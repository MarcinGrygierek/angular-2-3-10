import { Component, Inject, inject, InjectionToken, OnInit } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { LoremComponent } from '../lorem/lorem.component';

class RandomServiceStatic {
  constructor() {
    console.log('RandomServiceStatic instance created');
  }

  getValue() {
    return 1000;
  }
}

type ComponentConfig = {
  uuid: string;
}

const COMPONENT_CONFIG = new InjectionToken<ComponentConfig>('Component configuration', {
  providedIn: 'root',
  factory: () => ({
    uuid: 'Value 1234'
  })
});

@Component({
  selector: 'app-foo',
  imports: [LoremComponent],
  providers: [
    { provide: RandomService, useClass: RandomServiceStatic },
    // { provide: COMPONENT_CONFIG, useValue: { uuid: 'aefeae-123' } }
  ],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnInit {
  private random = inject(RandomService);
  private config = inject(COMPONENT_CONFIG);
  value = this.random.getValue();

  ngOnInit(): void {
      console.log(this.config);
  }
}
