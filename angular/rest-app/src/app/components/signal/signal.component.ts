import { ChangeDetectionStrategy, Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  elements: WritableSignal<number[]> = signal([1, 2, 3, 4]);
  count = computed(() => this.elements().length);
  doubleCount = computed(() => this.count() * 2);
  readonlyElements = this.elements.asReadonly(); 

  addNewElement() {
    this.elements.update(prev => [...prev, (Math.random() * 100)])
  }

  reset() {
    this.elements.set([1, 2, 3]);
  }
}
