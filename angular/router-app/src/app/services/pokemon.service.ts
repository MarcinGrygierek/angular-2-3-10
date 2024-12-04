import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PokemonResponse } from '../types/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = inject(ApiService);

  public getPokemonByName(pokemonName: string) {
    return this.api.get<PokemonResponse>(`pokemon/${pokemonName}`)
  }
}
