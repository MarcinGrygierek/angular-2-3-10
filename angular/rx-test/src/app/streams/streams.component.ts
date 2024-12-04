import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, concatMap, exhaustMap, forkJoin, fromEvent, interval, map, merge, mergeAll, mergeMap, of, switchMap, take, timer } from 'rxjs';

@Component({
  selector: 'app-streams',
  imports: [],
  templateUrl: './streams.component.html',
  styleUrl: './streams.component.scss'
})
export class StreamsComponent implements AfterViewInit {
  @ViewChild('button')
  button!: ElementRef<HTMLButtonElement>;

  getSomeRandomData() {
    const value = Math.round(Math.random() * 1000);
    console.log('DEBUG:', value);
    return timer(Math.round(Math.random() * 1000 + 500))
      .pipe(map(_ => value));
  }

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        exhaustMap(_ => this.getSomeRandomData())
      )
      .subscribe(val => {
        console.log(val);
      });
  }

}
