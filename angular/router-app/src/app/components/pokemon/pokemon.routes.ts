import { pokemonResolver } from '../../pokemon.resolver';
import { AboutPokemonComponent } from './about-pokemon/about-pokemon.component';
import { PokemonFirstComponent } from './pokemon-first/pokemon-first.component';
import { PokemonComponent } from './pokemon.component';

export const POKEMON_ROUTES = [
    {
        path: '',
        component: PokemonComponent,
        children: [
            {
                path: 'about',
                component: AboutPokemonComponent,
            },
            {
                path: 'first/:pokemonName',
                component: PokemonFirstComponent,
                resolve: {
                    pokemon: pokemonResolver
                }
            },
            {
                path: 'second/:pokemonName',
                loadComponent: () => import('./pokemon-second/pokemon-second.component').then(c => c.PokemonSecondComponent)
                // component: PokemonSecondComponent,
            }
        ]
    },
]