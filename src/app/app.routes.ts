import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    title: 'Nefesh Care - Spiritual & Mental Health for the Jewish Community'
  },
  {
    path: 'about',
    component: About,
    title: 'About Nefesh Care - PTSD Support & Mental Health'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
