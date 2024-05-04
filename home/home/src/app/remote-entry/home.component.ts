import { Component } from '@angular/core';
import { worksFormat } from '@puppo/utils';

@Component({
  standalone: true,
  selector: 'ng-home-page',
  template: `
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>
  `,
})
export class HomeComponent {
  title = 'Home';
  text = worksFormat(this.title);
}
