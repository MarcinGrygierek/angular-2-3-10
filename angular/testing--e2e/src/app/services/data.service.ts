import { Injectable, signal } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data = signal<string[]>([]);
  data = this._data.asReadonly();

  addElement(title: string) {
    timer(Math.round(Math.random() * 500)).subscribe(_ => {
      this._data.update(prev => [...prev, title]);
    })
  }
}
