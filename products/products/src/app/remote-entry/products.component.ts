import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '@puppo/products/services';
import { worksFormat } from '@puppo/utils';

@Component({
  standalone: true,
  selector: 'ng-prods-page',
  providers: [ProductsService],
  template: `
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>

    <ul>
      @for (product of products(); track product.id) {
      <li>
        {{ product.title }}
      </li>
      }
    </ul>
  `,
})
export class ProductsComponent {
  title = 'Products';
  text = worksFormat(this.title);
  private readonly productsService = inject(ProductsService);

  products = toSignal(this.productsService.getProducts({ limit: 10 }), {
    initialValue: [],
  });
}
