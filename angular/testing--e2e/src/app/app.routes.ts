import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    }, {
        path: 'data', canActivate: [authGuard], component: ListComponent
    }
];
