import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    title: 'Nefesh Care - Spiritual & Mental Health for the Jewish Community'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
