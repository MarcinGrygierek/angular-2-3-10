import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';

@Component({
  selector: 'app-root',
  imports: [ElementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-exercise';
}
