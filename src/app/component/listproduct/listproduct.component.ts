import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';


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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {name:"Movil", 
//   detail:"la imagen bien, el sonido dentro de lo aceptable, el detalle está en el navegador predeterminado que trae de fabrica (asistente virtual) direcciona las búsquedas a la plataforma youtube o netflix, en el almacén dicen que eso se debe solicitar por garantía a la pagina de xiaomi colombia y ellos responden que solo lo que se compre directamente en la pagina.", 
//   image:"https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/celular-samsung-galaxy-a13-64gb-azul-claro-1.webp", 
//   price:1100000, 
//   tag:["Tech","Movil"], 
//   stock:100, 
//   sku:"ffss515df1",
//   isdiscount:true,
//   discount:40,
//   pricediscount:660000
//   },
//   {name:"TV", detail:"La imagen es genial, todo muy bien. Solamente en lo que corresponde netamente a TV, la conexión es algo tediosa de lograr; por ejemplo: no me sale otra opción mas que la antena de aire. Sería bueno solucionar eso.", image:"https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/televisor-samsung-58%22-crystal-4k-uhd-smart-tv-un58au7000-1.webp", price:1500000, tag:["Tech"], stock:150, sku:"ssfsd5ds5s", isdiscount: true, discount: 45, pricediscount:825000},
//   {name:"Celular", detail:"Es Rapido", image:"", price:0, tag:["dd"], stock:0, sku:"", isdiscount:false, discount: 0, pricediscount:660000},
//   {name:"Xbox", detail:"Muchos Juegos", image:"", price:0, tag:["ss"], stock:0, sku:"", isdiscount: false, discount: 0, pricediscount:660000}
// ];

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit{
  lengthPaginator!:number;
  pageEvent!:PageEvent;
  detailProduct!:Object;
  dataProduct!:PeriodicElement[];
  data!:PeriodicElement[];

  constructor(public dialog: MatDialog, private serviceHttp: HttpService){
 
  }

  ngOnInit(){
    this.getListProduct()
  }

  getListProduct(){
    this.serviceHttp.productGet().subscribe((data)=>{
      this.dataProduct = data.data
      this.lengthPaginator = this.dataProduct.length

    })
  }

  changeFilter(value:any){
    console.log(value)
    let data = value.value
    this.serviceHttp.productFilter(data).subscribe((data) => {
      this.dataProduct = data.data
    })
  }

  lowValue = 0
  highValue = 12

  public getPaginatorData(event: PageEvent): PageEvent{
    this.lowValue = event.pageIndex * event.pageSize
    this.highValue = this.lowValue + event.pageSize
    return event
  }

  addProduct(){
    location.href = '/create-product'
  }
}
