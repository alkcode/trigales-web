import { Component, OnInit } from '@angular/core';
import { Barra } from '../../../../models/barra';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent implements OnInit {

  public barras: Barra[] = [];

  constructor() {
     this.barras=[
       new Barra("3L Chocolate","http://trigalesdeoro.com.mx/images/3%20l%20chocolate-u13688.png", "Pastel de 3L de chocolate con crema de cafe y ganash oscuro", 300.00, 15, 10, 50),
       new Barra("Niño envuelto de cajeta","http://trigalesdeoro.com.mx/images/3%20l%20mango-u13697.png", "Pastel de 3L de vainilla con crema de nata y duraznos", 300.00, 15, 10, 50),
       new Barra("3L Chocolate","http://trigalesdeoro.com.mx/images/3%20l%20chocolate-u13688.png", "Pastel de vainilla embebido en jarabe con crema de nata, dulce de leche y cremaquilla de nuez", 300.00, 15, 10, 50),
       new Barra("3L Zarzamora","http://trigalesdeoro.com.mx/images/barra%203l%20fresa-u14038.png", "Pastel de 3L de vainilla con mermelada de zarzamora de la casa", 300.00, 15, 10, 50),
       new Barra("3L Moka","http://trigalesdeoro.com.mx/images/barra%20moka-u14060.png", "Pastel de chocolate embebido en jarabe dulce, con crema sabor café y hojuelas de chocolate de leche", 300.00, 15, 10, 50),
       new Barra("3L Fresa","http://trigalesdeoro.com.mx/images/barra3l%20fresa-u14285.png", "Pastel de 3L de vainilla con fresas encima", 300.00, 15, 10, 50),
       new Barra("Imposible de frutas","http://trigalesdeoro.com.mx/images/imposible%20frutas-u14299.png", "Pastel imposible decorado con frutas", 300.00, 15, 10, 50),
       new Barra("3L Niño envuelto de mango","http://trigalesdeoro.com.mx/images/ni%c3%b1o%20env%203l%20mango-u14420.png", "Pastel de 3L de vainilla con mermelada de mango", 300.00, 15, 10, 50),
       new Barra("3L niño envuelto Monte Blanco","http://trigalesdeoro.com.mx/images/ni%c3%b1o%20env%203l%20monteblanco-u14541.png", "Pastel de 3L de vainilla con chocolate semiamargo", 300.00, 15, 10, 50),
      //  new Barra("","", "Pastel de 3L ", 300.00, 15, 10, 50),
     ];
   }
   
  ngOnInit(): void {
  }

}
