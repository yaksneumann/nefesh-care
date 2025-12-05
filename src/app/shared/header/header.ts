import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {
  menuOpen = false;

  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    this.menuOpen = false;
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigateToAbout(): void {
    this.menuOpen = false;
    this.router.navigate(['/about']);
  }
}
