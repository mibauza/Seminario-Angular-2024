import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import { MatFormFieldModule } from "@angular/material/form-field";

import { CarritoComponent } from './carrito/carrito/carrito.component';
import { ProductoListComponent } from './producto-list/producto-list.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, ProductoListComponent, CarritoComponent,
      MatToolbarRow,MatToolbar,MatSidenav,MatSidenavContainer,MatSidenavContent,HttpClientModule,MatFormFieldModule]
})
export class AppComponent {
  title = 'PcShop';
}
