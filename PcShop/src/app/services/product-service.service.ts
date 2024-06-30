import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productoModel } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://fakestoreapi.com/products"

  constructor(private http:HttpClient) { }


  public getProducts():Observable<productoModel[]>{
    
    return this.http.get<any>(this.url);
  }
}
