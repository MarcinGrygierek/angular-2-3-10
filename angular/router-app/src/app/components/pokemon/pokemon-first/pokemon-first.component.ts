import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonResponse } from '../../../types/pokemon';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

type PokemonResolverData = {
  pokemon: PokemonResponse;
}

const isPokemonData = (data: unknown): data is PokemonResolverData => {
  const correctData = data as PokemonResolverData;

  return !!correctData.pokemon && !!correctData.pokemon.name;
}

@Component({
  selector: 'app-pokemon-first',
  imports: [AsyncPipe],
  templateUrl: './pokemon-first.component.html',
  styleUrl: './pokemon-first.component.scss'
})
export class PokemonFirstComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute);

  ngOnInit(): void {
      console.log('Mounted')
  }

  pokemon$ = this.activeRoute.data
    .pipe(
      map(data => {
        if (isPokemonData(data)) return data.pokemon;
        return null;
      })
    )
}