import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';

export interface PeriodicElement {
  _id?:string;
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

export interface TagList {
  name:string;
}

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit{
  @Input() detailProduct!:PeriodicElement;
  @Input() updateValidator!:boolean;
  
  showInputValidator!:boolean;
  dataProduct!:FormGroup
  disabled: boolean = true;
  calculateValue!:number;
  image!:string;
  listTag!:TagList[];

  constructor(private _formBuilder: FormBuilder, private serviceHttp: HttpService){
  }

  ngOnInit() {
    this.dataProduct = this._formBuilder.group({
      name: [this.detailProduct.name],
    detail: [this.detailProduct.detail],
    image: [this.detailProduct.image],
    price: [this.detailProduct.price],
    tag: [this.detailProduct.tag],
    stock: [this.detailProduct.stock],
    sku:[this.detailProduct.sku],
    isdiscount:[this.detailProduct.isdiscount],
    discount:[this.detailProduct.discount],
    pricediscount:[{value: this.detailProduct.pricediscount, disabled:true}],
    })

    this.showInputValidator = this.detailProduct.isdiscount
    this.image = this.detailProduct.image

    this.serviceHttp.tagGet().subscribe((data) => {
      this.listTag = data.data
    })
  }

  showInput(showInput:any){
    this.showInputValidator = showInput.checked
  }

  getValueChange(){
    this.calculateValue = this.dataProduct.value.price - ((this.dataProduct.value.discount * this.dataProduct.value.price) / 100)
  }

  changeImage(){
    this.image = this.dataProduct.value.image
  }
  
  updateProduct(){
    let productUpdate = {
      _id: this.detailProduct._id,
       ...this.dataProduct.value,
        ishistoryprice: (this.dataProduct.value.price == this.detailProduct.price) ? false : true,
        ishistorystock:(this.dataProduct.value.stock == this.detailProduct.stock) ? false : true
      }
    this.serviceHttp.productUpdate(productUpdate).subscribe((data) => {
      location.href = ''
    })
  }

  saveProduct(){
    this.serviceHttp.productAgregate(this.dataProduct.value).subscribe((data) => {
      location.href = ''
    })
  }
}
