import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  detail: string;
  image: string;
  price: number;
  tag: string[];
  stock: number;
  sku: string;
  isdiscount: boolean;
  discount: number;
  pricediscount: number;
}

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
  dataProduct: PeriodicElement = {
    name: "",
    detail: "",
    image: "",
    price: 0,
    tag: [],
    stock: 0,
    sku: "",
    isdiscount: false,
    discount: 0,
    pricediscount: 0
  };

  constructor() { }

}
