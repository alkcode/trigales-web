import { Component, OnInit } from '@angular/core';
import { Pastel } from '../../../models/pastel';

@Component({
  selector: 'app-individuales',
  templateUrl: './individuales.component.html',
  styleUrls: ['./individuales.component.scss']
})
export class IndividualesComponent implements OnInit {

  public pasteles: Pastel[] =[];

  constructor() { 
    //Definimos el array de pasteles indivuduales
    this.pasteles =[
      new Pastel("3L Chocolate", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10, 5),
      new Pastel("3L Cajeta", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
      new Pastel("3L Moka", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
      new Pastel("3L Cebra", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
      new Pastel("3L Rompope", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
      new Pastel("3L Imperial", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
      new Pastel("3L Nata", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
      new Pastel("3L Chocolate", "http://trigalesdeoro.com.mx/images/miniatura.png", "Pastel combinado chocolate y vainilla con cremaquilla vainilla y chocolate", 45.00, 10 , 5),
    ];
  }

  ngOnInit(): void {
  }

}
