import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

@Component({
  standalone: true,
  imports: [CommonModule, HomeComponent],
  selector: 'ng-home-entry',
  template: `<ng-home-page />`,
})
export class RemoteEntryComponent {}
