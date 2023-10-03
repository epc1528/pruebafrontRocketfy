import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  detail: string;
  image: string;
  price: number;
  tag:string[];
  stock: number;
  sku:string;
  isdiscount:boolean;
  discount:number;
  pricediscount:number;
}

@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.css']
})
export class CardproductComponent {
  @Input() detailProduct!: PeriodicElement
  @Input() indexProduct!: number
  @Input() validateDetail!: boolean
  listTags!:string[]

  public validatorTag(element:any): boolean{
    if(element.tag) {
      this.listTags = element.tag
      return true
    }
    return false
  }

  public validatorDiscount(element:any): boolean{
    if(element.isdiscount) return true
    return false
  }

  sendIndex(product:Object){
    localStorage.setItem("product",JSON.stringify(product))
    location.href = '/detail-product'
  }
}
