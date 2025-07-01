import { Component } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectionList } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectionList,MatSelectModule,
    MatOptionModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
