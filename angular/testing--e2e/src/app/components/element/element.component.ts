import { Component, input } from '@angular/core';

@Component({
  selector: 'app-element',
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.scss'
})
export class ElementComponent {
  element = input<string>();
}
