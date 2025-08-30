import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { ParallaxBgDirective } from './directives/parallax-bg.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ParallaxBgDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
