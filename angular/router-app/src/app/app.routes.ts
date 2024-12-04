import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PokemonFirstComponent } from './components/pokemon/pokemon-first/pokemon-first.component';
import { ErrorComponent } from './components/error/error.component';
import { pokemonResolver } from './pokemon.resolver';
import { PokemonSecondComponent } from './components/pokemon/pokemon-second/pokemon-second.component';
import { authGuard } from './auth.guard';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { AboutPokemonComponent } from './components/pokemon/about-pokemon/about-pokemon.component';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { randomGuard } from './random.guard';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'pokemon',
        canMatch: [authGuard],
        loadChildren: () => import('./components/pokemon/pokemon.routes')
            .then(mod => mod.POKEMON_ROUTES)
    },
    {
        path: 'test',
        component: TestAComponent,
        canMatch: [randomGuard]
    },
    {
        path: 'test',
        component: TestBComponent,
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path: '**', component: ErrorComponent
    }
];
