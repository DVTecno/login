import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/shell/auth.routes')
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.component')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
