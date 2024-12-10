import { Component } from '@angular/core';
import { HelloComponent } from './components/hello/hello.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  imports: [PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

