import { Component } from '@angular/core';
import { worksFormat } from '@puppo/utils';

@Component({
  standalone: true,
  selector: 'ng-cart-page',
  template: `
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>
  `,
})
export class CartComponent {
  title = 'Cart';
  text = worksFormat(this.title);
}
