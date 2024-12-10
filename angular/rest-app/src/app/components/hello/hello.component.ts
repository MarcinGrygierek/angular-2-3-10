import { Component, effect, input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  message = input<string>();

  name = input.required<string>();

  onHello = output<string>();

  constructor() {
    effect((onCleanUp) => {
      const timeout = setTimeout(() => {
        console.log('Message has been updated', this.message())
      }, 2000);
   
      onCleanUp(() => {
        console.log('Clearing effect');
        clearTimeout(timeout);
      })
    })

    effect(() => {
      console.log('Name has been updated', this.name())
    })
  }

  sayHello() {
    this.onHello.emit(this.name() + ' says hello!');
  }
}
