import { Component } from '@angular/core';

import { FormComponent } from './components/form/form.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  product = {};
  getProductData(data: any) {
    this.product = data;
  }
}
