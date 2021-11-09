import { Component, OnInit } from '@angular/core';
import { Pastel } from '../../../../models/pastel';
@Component({
  selector: 'app-envinado',
  templateUrl: './envinado.component.html',
  styleUrls: ['./envinado.component.scss']
})
export class EnvinadoComponent implements OnInit {

  public pasteles: Pastel[] =[];

  constructor() {
      this.pasteles=[
        new Pastel("Choconuez","http://trigalesdeoro.com.mx/images/choconuez-u10634.png", "Pastel de vainilla con nueces y doble chococlate con nueces", 300.00, 15, 10),
        new Pastel("Domino","http://trigalesdeoro.com.mx/images/domino%20tradicional-u10642.png", "Pastel combinado de pan de chocolate y vainilla, cremaquilla de vainilla y chocolate", 300.00, 15, 10),
        new Pastel("Moka blanca","http://trigalesdeoro.com.mx/images/moka%20blanco-u10871.png", "Pastel de vainilla con crema de nata y chocolate blanco", 300.00, 15, 10),
        new Pastel("Moka","http://trigalesdeoro.com.mx/images/moka%20tradicional-u10890.png", "Pastel de chocolate con crema de café y chocolate de leche", 300.00, 15, 10),
        new Pastel("Sacher","http://trigalesdeoro.com.mx/images/sacher-u11111.png", "Pastel de chocolate con mermelada de chabacano y doble cubierta de chocolate", 300.00, 15, 10),
        new Pastel("Trufa","http://trigalesdeoro.com.mx/images/trufa%20trad-u11231.png", "Pastel de chocolate con uneces y chocolate amargo", 300.00, 15, 10),
      ];
   }

  ngOnInit(): void {
  }

}
