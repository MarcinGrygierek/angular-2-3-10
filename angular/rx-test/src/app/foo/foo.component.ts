import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, scan, Subscription, take, takeLast, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  private sub2!: Subscription;

  async handlePromise() {
    const prs = new Promise<string>(resolve => {
      console.log('Promise start!');
      setTimeout(() => {
        resolve('Sukces!')
      }, 1000)
    })

    setTimeout(async () => {
      const response = await prs;
      console.log('PROMISE', response);
    }, 1000)
  }

  handleObservable() {
    const obs = new Observable<number>(observer => {
      console.log('Observable start!')
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        observer.next(counter)
      }, 1000);

      return {
        unsubscribe() {
          clearInterval(interval);
        }
      }
    })

    this.sub2 = obs.subscribe(val => console.log('OBSERVABLE1', val))

    setTimeout(() => {
      this.sub = obs.subscribe(val => console.log('OBSERVABLE2', val))
    }, 2000)
  }

  calculateSum() {
    const arr = [1, 2, 3, 560, 12, 23, 445, 23, 55, 44, 32, 22, 1245, 754];

    const sum = arr
      .filter(value => value % 2 === 0 && value >= 10 && value <= 50)
      .map(value => value ** 2)
      .reduce((acc, curr) => acc + curr);

    console.log('ARRAY', sum);

    this.sub = from(arr)
      .pipe(
        tap(val => console.log('Val:', val)),
        filter(val => val % 2 === 0 && val >= 10 && val <= 50),
        map(val => val ** 2),
        scan((acc, curr) => acc + curr),
        takeLast(1)
      )
      .subscribe(sum => {
        console.log('OBSERVABLE', sum);
      });
  }

  handleTimers() {
    const obs = interval(1000).pipe(
      takeUntil(timer(5000))
    );
    obs.subscribe(val => console.log(val));
  }

  ngOnInit(): void {
    // this.handlePromise();
    // this.handleObservable();
    // this.calculateSum();
    this.handleTimers()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
