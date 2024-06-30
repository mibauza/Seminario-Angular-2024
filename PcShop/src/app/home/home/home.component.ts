import { Component } from '@angular/core';
import { ProductoListComponent } from '../../producto-list/producto-list.component';
import { CarritoComponent } from "../../carrito/carrito/carrito.component";
import { MatTabsModule } from '@angular/material/tabs';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductoListComponent, CarritoComponent, MatTabsModule]
})
export class HomeComponent {

}
