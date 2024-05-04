import { Component } from '@angular/core';
import { CartComponent } from './cart.component';

@Component({
  standalone: true,
  imports: [CartComponent],
  selector: 'ng-cart-entry',
  template: `<ng-cart-page />`,
})
export class RemoteEntryComponent {}
