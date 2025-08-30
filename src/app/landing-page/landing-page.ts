import { Component } from '@angular/core';
import { Home } from '../pages/home/home';
import { Mission } from '../pages/mission/mission';
import { Programs } from '../pages/programs/programs';
import { GetInvolved } from '../pages/get-involved/get-involved';
import { Donate } from '../pages/donate/donate';
import { Contact } from '../pages/contact/contact';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-landing-page',
  imports: [
    Home, 
    Mission, 
    Programs, 
    GetInvolved, 
    Donate, 
    Contact,
    FadeInDirective
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  standalone: true
})
export class LandingPage {

}
