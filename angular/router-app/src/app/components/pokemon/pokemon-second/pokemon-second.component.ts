import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonService } from '../../../services/pokemon.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-second',
  imports: [AsyncPipe],
  templateUrl: './pokemon-second.component.html',
  styleUrl: './pokemon-second.component.scss'
})
export class PokemonSecondComponent {
  private activeRoute = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);

  pokemon$ = this.activeRoute.paramMap
    .pipe(
      switchMap(params => this.pokemonService.getPokemonByName(params.get('pokemonName') || ''))
    )
}
