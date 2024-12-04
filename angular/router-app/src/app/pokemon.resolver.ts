import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { PokemonResponse } from './types/pokemon';
import { inject } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

export const pokemonResolver: ResolveFn<PokemonResponse> = (route, state) => {
  const pokemonService = inject(PokemonService);
  const router = inject(Router);

  const pokemonName = route.paramMap.get('pokemonName');

  if(!pokemonName) return new RedirectCommand(router.parseUrl('/'))

  return pokemonService.getPokemonByName(pokemonName)
};
