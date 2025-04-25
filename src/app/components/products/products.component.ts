import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() product: any = {};
  products: any[] = [
    {
      productName: 'PC',
      productDescription: 'This is a PC',
      imgUrl: 'https://m.media-amazon.com/images/I/91LSF1iZUFL._AC_SL1500_.jpg',
      rate: 5,
    },
    {
      productName: 'Gaming Keyboard',
      productDescription: 'This is a gaming keyboard',
      imgUrl: 'https://m.media-amazon.com/images/I/41Xi+eR3CNL._SR290,290_.jpg',
      rate: 4,
    },
    {
      productName: 'Gaming Mouse',
      productDescription: 'This is a gaming mouse',
      imgUrl:
        'https://btech.com/media/catalog/product/cache/071d5ccae038fcedc91e567360d549bc/l/o/logitech-hero-g502-black-gaming-mouse.jpg',
      rate: 4,
    },
    {
      productName: 'Gaming Mousepad',
      productDescription: 'This is a gaming mousepad',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLbT8hI2e5z7AB68jJlk985yuiforu4GagA&s',
      rate: 3,
    },
    {
      productName: 'Headset',
      productDescription: 'This is a gaming headset',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEaiFI8gna4GAKV-ktPHFNHzgHP8xcrJ_aw&s',
      rate: 4,
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['product'].firstChange) {
      this.products.push(this.product);
      console.log(this.products);
    }
  }
}
