import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  value$ = new BehaviorSubject<number>(100);

  sub1 = this.value$.subscribe(val => console.log('VAL1', val));
  sub2 = this.value$.subscribe(val => console.log('VAL2', val));

  generateValue() {
    const newValue = Math.round(Math.random() * 10000);
    this.value$.next(newValue);
  }
}
