import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donate',
  imports: [RouterLink],
  templateUrl: './donate.html',
  styleUrl: './donate.css',
  standalone: true
})
export class Donate {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
