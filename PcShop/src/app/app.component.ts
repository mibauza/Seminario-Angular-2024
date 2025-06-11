import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, ProductoListComponent, CarritoComponent,
      MatToolbarRow,MatToolbar,MatSidenav,MatSidenavContainer,MatSidenavContent,HttpClientModule,MatFormFieldModule, ReactiveFormsModule, MatInputModule]
})
export class AppComponent {
  title = 'PcShop';
}
