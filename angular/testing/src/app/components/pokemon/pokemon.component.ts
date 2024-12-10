import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  private pokemonService = inject(PokemonService);

  pokemons = this.pokemonService.data;

  getData() {
    this.pokemonService.getPokemon();
  }
}
