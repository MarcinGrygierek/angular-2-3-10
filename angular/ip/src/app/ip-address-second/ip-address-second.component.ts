import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, mergeMap, Observable, switchMap } from 'rxjs';

type IPResponse = {
  ip: string
}

const isCorrectData = (data: unknown): data is IPResponse => {
  const correctedData = data as IPResponse;
  if ('ip' in correctedData && typeof correctedData.ip === 'string') return true;
  return false;
}

@Component({
  selector: 'app-ip-address-second',
  imports: [AsyncPipe],
  templateUrl: './ip-address-second.component.html',
  styleUrl: './ip-address-second.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpAddressSecondComponent implements AfterViewInit {
  @ViewChild('button')
  button!: ElementRef<HTMLButtonElement>;

  ip = signal<string>('');
  ipFromEvent$!: Observable<string>;

  private http = inject(HttpClient);

  ngAfterViewInit(): void {
    this.ipFromEvent$ = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        debounceTime(300),
        switchMap(_ => this.http.get<IPResponse>('https://api.ipify.org?format=json')
          .pipe(map(data => {
            if (isCorrectData(data)) return data.ip;
            else return 'Cannot fetch IP'
          }))
        )
      )

  }

  fetchIpAddress() {
    this.http.get<IPResponse>('https://api.ipify.org?format=json')
      .pipe(map(data => {
        if (isCorrectData(data)) return data.ip;
        else return 'Cannot fetch IP'
      }))
      .subscribe(ip => {
        this.ip.set(ip);
      })
  }
}
