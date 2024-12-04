import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public log(message: string) {
    const currentDate = new Date();
    console.log(`[${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}] - ${message} `)
  }
}
