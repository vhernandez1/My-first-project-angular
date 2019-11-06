import { Component } from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'victor' ];
  products: Product = [
    {
      id: '1',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
      image: 'assets/images/camiseta.png'
    },
    {
      id: '2',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
      image: 'assets/images/hoodie.png'
    },
    {
      id: '3',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
      image: 'assets/images/mug.png'
    },
    {
      id: '4',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
      image: 'assets/images/pin.png'
    },
    {
      id: '5',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
      image: 'assets/images/stickers1.png'
    },
    {
      id: '6',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
      image: 'assets/images/stickers2.png'
    },
  ];
  addItem() {
    this.items.push('new Item');
  }


  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
