import { Component, OnInit } from '@angular/core';
import { productoModel } from '../../services/models/producto.model';
import { ProductoCompartidoService } from '../../services/producto-compartido.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{

  _productos:productoModel[] = [];
  precioTotal:number =0;
  
  constructor(private apiCompartir:ProductoCompartidoService){    
  }

  ngOnInit(): void {
    this.apiCompartir.datos$.subscribe(datosNuevos =>{
      this._productos = datosNuevos;
      console.log(datosNuevos);
      this.getPrecioTotal();
      console.log(this.precioTotal);
    })
    
  }

  
  getPrecioTotal(){
    console.log("get preciioTotal carrito")    
    this._productos.forEach(element => {
      this.precioTotal = this.precioTotal + (element.price * element.rating.count);       
      
    });    
  }

  finalizarCompra(){
    window.location.reload();
  }
}
