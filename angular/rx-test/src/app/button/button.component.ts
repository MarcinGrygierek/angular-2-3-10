import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, mergeMap, Observable } from 'rxjs';
import { NumbersService } from '../numbers.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [AsyncPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('second')
  button!: ElementRef<HTMLButtonElement>;

  private numbersService = inject(NumbersService);

  first: number = 0;
  second$!: Observable<number>;

  handleClick() {
    this.numbersService.getRandomNumber().subscribe(val => this.first = val);
  }

  ngOnInit(): void {
    console.log(this.button);
  }

  ngAfterViewInit(): void {
    this.second$ = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        debounceTime(500),
        mergeMap(_ => this.numbersService.getRandomNumber())
      )
  }
}
