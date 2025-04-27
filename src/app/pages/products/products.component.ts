import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ProductsCardsComponent } from '../../components/products-cards/products-cards.component';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [FormComponent, ProductsCardsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  product = {};
  getProductData(data: any) {
    this.product = data;
  }
}
