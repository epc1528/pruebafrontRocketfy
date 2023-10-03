import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
   }
 
  productGet(): Observable<any>{
    return this.http.get<any>('http://localhost:9000/product');
  }

  productAgregate(product:any): Observable<any>{
    return this.http.post<any>('http://localhost:9000/product',product);
  }

  productUpdate(product:any): Observable<any>{
    return this.http.put<any>('http://localhost:9000/product', product);
  }

  productDelete(product:any): Observable<any>{
    return this.http.delete<any>('http://localhost:9000/product/'+product.sku+'/'+product._id,product);
  }

  productFilter(filter:any): Observable<any>{
    return this.http.get<any>('http://localhost:9000/product/'+filter);
  }

  tagGet(): Observable<any>{
    return this.http.get<any>('http://localhost:9000/tag');
  }

  
}
