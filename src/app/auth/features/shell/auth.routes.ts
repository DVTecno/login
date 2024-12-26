import { Routes } from '@angular/router';

export default [
  {
    path: 'log-in',
    loadComponent: () => import('../log-in/log-in.component')
  },
  {
    path: 'sing-up',
    loadComponent: () => import('../sing-up/sing-up.component')
  }

] as Routes
