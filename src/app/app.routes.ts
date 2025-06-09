import { Routes } from '@angular/router';
import { NotFound } from './features/not-found/not-found';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFound,
    },
];
