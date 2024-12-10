import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { PokemonResponse } from '../types/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = inject(ApiService);
  private _data = signal<string[]>([]);
  data = this._data.asReadonly();

  getPokemon() {
    this.api.get<PokemonResponse>('pokemon').subscribe(response => {
      this._data.set(response.results.map(pokemon => pokemon.name));
    })
  }
}
