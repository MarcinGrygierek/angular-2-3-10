import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-elements',
  imports: [],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {
  elements = signal<number[]>([]);
  evenElements = computed(() => this.elements().filter(val => val % 2 === 0));

  constructor() {
    effect(() => {
      const elements = this.evenElements();

      if (!elements.length) return;
      console.log(`New even value added: ${elements[elements.length - 1]}`)
    })
  }

  addNewElement() {
    this.elements.update(prev => [...prev, Math.round(Math.random() * 10000)]);
  }
}
