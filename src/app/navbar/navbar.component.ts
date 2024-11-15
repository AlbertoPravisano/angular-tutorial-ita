import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/form">Form</a>
      |
      <a routerLink="/tabella">Tabella</a>
    </nav>
    <router-outlet />
  `,
})
export class NavbarComponent {}
