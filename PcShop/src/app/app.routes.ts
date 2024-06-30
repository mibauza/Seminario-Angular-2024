import { Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'contacto', component: ContactoComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },    
];


