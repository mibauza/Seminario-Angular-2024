import { Component, Input, input, OnInit } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { ProductService } from '../services/product-service.service';
import { productoModel } from '../services/models/producto.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCompartidoService } from '../services/producto-compartido.service';



@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [MatListItem, MatList, NgClass, FormsModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit {

  _productos: productoModel[] = [];  
  

  constructor(private apiService: ProductService, private apiCompartir:ProductoCompartidoService) {     
  }

  ngOnInit() {
    this.getProductos();
    
  }

  public getProductos() {
    this.apiService.getProducts().subscribe(
      (data: productoModel[]) => {
        this._productos = data;        
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  esDestacado(producto: productoModel): boolean {
    return producto.rating.count > 400;
  }


  restar(producto: productoModel) {

    if (producto.rating.count > 1) {      
      producto.rating.count--;      
    }
  }

  
  sumar(event:any, producto: productoModel) { 
    
    if (event.target.value < producto.rating.count) {
      producto.rating.count++;                  
    }  
    
  }

  
/*cambiarValor(event: any, producto: productoModel) {
    let valor = event.target.value;
    console.log (event.target.value);
    if (valor < 1) {
      producto.rating.count = 1;
    } else if (valor > producto.rating.count) {
      producto.rating.count = producto.rating.count;
    } else {
      producto.rating.count = parseInt(valor, 10);
    }
  }*/

  agregarProducto(producto:productoModel){
    console.log("agregarProducto producto-list");
    this.apiCompartir.agregarProducto(producto);
  }

}


