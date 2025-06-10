import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { Dashboard } from './pages/dashboard/dashboard';

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
