import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private randomValue = Math.round(Math.random() * 10000);

  public getValue() {
    return this.randomValue;
  }

  constructor() {
    console.log('Created RandomService Instance')
  }
}
