import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

export interface PeriodicElement {
  _id: string
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
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit{
  dataProduct!:PeriodicElement;
  detailValidator:boolean = true;

  
  constructor(private seviceHttp: HttpService){}

  ngOnInit(): void {
    const valueStorage = localStorage.getItem("product")
    if(valueStorage == null) location.href = '';
    else this.dataProduct = JSON.parse(valueStorage)
    console.log(this.dataProduct)
  }
  
  public validatorDiscount(element:any): boolean{
    if(element.isdiscount) return true
    return false
  }

  updateValidator(){
    this.detailValidator = !this.detailValidator
  }

  deleteProduct(){
    this.seviceHttp.productDelete({_id: this.dataProduct._id, sku: this.dataProduct.sku}).subscribe((data) => {
      location.href = '/';
    })
  }
}
