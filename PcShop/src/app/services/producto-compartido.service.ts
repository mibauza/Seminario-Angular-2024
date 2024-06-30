import { Injectable } from '@angular/core';
import { productoModel } from './models/producto.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoCompartidoService {

  private datosSubject = new Subject<any>();
  datos$ = this.datosSubject.asObservable();

  productos:productoModel[] = [];


  constructor() { }

  agregarProducto(producto:productoModel){//actualiza el arreglo de productos
    this.productos.push(producto);
    this.datosSubject.next(this.productos);
    console.log("agregarProducto del servicio");
    console.log(this.productos);
  }

  getProductos():productoModel[]{
    console.log("get productos del servicio");
    console.log(this.productos);
    return this.productos;
  }
  
}
