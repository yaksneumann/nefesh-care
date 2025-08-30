import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-involved',
  imports: [RouterLink],
  templateUrl: './get-involved.html',
  styleUrl: './get-involved.css',
  standalone: true
})
export class GetInvolved {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
