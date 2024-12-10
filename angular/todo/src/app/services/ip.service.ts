import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { IPResponse } from '../types/ip';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  private api = inject(ApiService);
  private _ip = signal<string>('');
  ip = this._ip.asReadonly();

  getIp() {
    return this.api.get<IPResponse>('https://api.ipify.org?format=json')
    .pipe(
      map(response => response.ip)
    )
    .subscribe(ip => {
      this._ip.set(ip);
    });
  }
}
