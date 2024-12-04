import { Injectable } from '@angular/core';
import { SingleElement } from './types';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: SingleElement[] = [
    { id: 1, text: 'Lorem' },
    { id: 2, text: 'Ipsum' },
    { id: 3, text: 'Dolor' },
    { id: 4, text: 'Sit' },
  ]

  getData() {
    return this.data;
  }
}
