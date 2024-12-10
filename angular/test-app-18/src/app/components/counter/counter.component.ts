import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  private store = inject(Store);
  counter$: Observable<{ value: number }> = this.store.select('counter');

  handleIncrement() {
    this.store.dispatch(increment())
  }
}
