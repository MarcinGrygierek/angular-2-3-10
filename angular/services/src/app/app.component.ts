import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './components/foo/foo.component';
import { BarComponent } from './components/bar/bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooComponent, BarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'services';
}
