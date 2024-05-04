import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BASE_API_URL_TOKEN } from '@puppo/products/services';
import { ProductsComponent } from './products.component';

@Component({
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  providers: [
    {
      provide: BASE_API_URL_TOKEN,
      useValue: 'https://fakestoreapi.com',
    },
  ],
  selector: 'ng-prods-entry',
  template: `<ng-prods-page />`,
})
export class RemoteEntryComponent {}
