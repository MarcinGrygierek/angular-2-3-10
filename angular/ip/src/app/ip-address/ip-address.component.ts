import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

type IPResponse = {
  ip: string
}

const isCorrectData = (data: unknown): data is IPResponse => {
  const correctedData = data as IPResponse;
  if ('ip' in correctedData && typeof correctedData.ip === 'string') return true;
  return false;
}

@Component({
  selector: 'app-ip-address',
  imports: [AsyncPipe],
  templateUrl: './ip-address.component.html',
  styleUrl: './ip-address.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IpAddressComponent {
  ip$!: Observable<string>;

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.ip$ = this.http.get<IPResponse>('https://api.ipify.org?format=json')
      .pipe(map(data => {
        if (isCorrectData(data)) return data.ip;
        else return 'Cannot fetch IP'
      }))
  }
}
