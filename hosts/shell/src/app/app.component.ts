import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '@puppo/ui';

@Component({
  standalone: true,
  imports: [NavBarComponent, RouterModule],
  selector: 'app-root',
  template: `
    <ng-nav-bar [navItems]="navItems"></ng-nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Cart', path: '/cart' },
  ];
}
