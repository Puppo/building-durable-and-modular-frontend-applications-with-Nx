import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  path: string;
};

@Component({
  standalone: true,
  selector: 'ng-nav-bar',
  imports: [RouterLink],
  template: `
    <nav>
      @for (item of navItems; track $index) {
      <a [routerLink]="item.path">{{ item.label }}</a>
      }
    </nav>
  `,
  styles: [
    `
      nav {
        display: flex;
        background-color: #eee;
      }

      a {
        padding: 1rem 0.5rem;
      }
    `,
  ],
})
export class NavBarComponent {
  @Input() navItems: NavItem[] = [];
}
