import { Component, OnInit } from '@angular/core';
import { Pastel } from '../../../../models/pastel';

@Component({
  selector: 'app-tresleches',
  templateUrl: './tresleches.component.html',
  styleUrls: ['./tresleches.component.scss']
})
export class TreslechesComponent implements OnInit {

  public pasteles: Pastel[] =[];

  constructor() { 
    this.pasteles = [
      new Pastel("3L Cajeta Príncipe","http://trigalesdeoro.com.mx/images/3l%20cajeta%20principe-u11638.png", "Pastel 3L de vainilla con crema de nata y dulce de leche", 335.00, 30, 10),
      new Pastel("3L Dos Chocolates","http://trigalesdeoro.com.mx/images/3l%20doschocolates-u11653.png", "Pastel 3L de vainilla con crema de chocolate y hojuelas de chocolate blanco", 335.00, 30, 10),
      new Pastel("3L Encanto de Zarzamora","http://trigalesdeoro.com.mx/images/3l%20encanto%20zarzamora-u11863.png", "Pastel de vainilla con crema de nata y mermelada de zarzamora embebido en 3 leches", 335.00, 30, 10),
      new Pastel("3L Moka","http://trigalesdeoro.com.mx/images/3l%20moka-u11982.png", "Pastel de chocolate con crema de café y hojuelas de chocolate de leche, embebido en 3 leches", 335.00, 30, 10),
      new Pastel("3L Napolitano","http://trigalesdeoro.com.mx/images/3l%20napolitano-u12098.png", "Pastel combinado de fresa, vainilla y chocolate embebido en 3 leches", 335.00, 30, 10),
      new Pastel("3L Reina de Fresa","http://trigalesdeoro.com.mx/images/3l%20reina%20fresa-u12214.png", "Pastel 3L de vainilla con crema de nata y fresas naturales", 335.00, 30, 10),
      new Pastel("3L Encanto de Fresa","http://trigalesdeoro.com.mx/images/3l%20encanto%20fresa-u12224.png", "Pastel de vainilla con crema de nata y mermelada de fresa embebido en 3 leches", 335.00, 30, 10),
      new Pastel("3L Kiwi","http://trigalesdeoro.com.mx/images/3l%20kiwi-u12340.png", "Pastel 3L de chocolate con base de queso crema, cubierto con una mermelada de kiwi hecha en casa", 335.00, 30, 10),
      new Pastel("3L Cajeta/Zarzamora","http://trigalesdeoro.com.mx/images/3l%20cajeta%20zarzamora-u12556.png", "Pastel 3L de vainilla con cremaquilla de nuez, mermelada de zarzamora y dulce del leche", 335.00, 30, 10),
      new Pastel("3L Cajeta","http://trigalesdeoro.com.mx/images/3l%20cajeta-u12674.png", "Pastel 3L de vainilla con crema de nuez y dulce de leche", 335.00, 30, 10),
      new Pastel("3L Chocofrutas","http://trigalesdeoro.com.mx/images/3l%20chocofrutas%201-u12686.png", "Pastel 3L de chocolate con una crema suave de chocolate con fresas y chocolate en hojuelas", 335.00, 15, 10),
      new Pastel("3L Chocoloco","http://trigalesdeoro.com.mx/images/3l%20chocoloco-u12900.png", "Pastel 3L marmoleado con crema de café y chocolate", 335.00, 30, 10),
      new Pastel("3L Mango","http://trigalesdeoro.com.mx/images/3l%20mango-u12919.png", "Pastel 3L de vainilla con crema de neta y mermelada de margo", 335.00, 30, 10),
      new Pastel("3L Cajeta Plus","http://trigalesdeoro.com.mx/images/cajeta%20pluss-u13028.png", "Pastel 3L de vainilla con tres leches de cajeta y crema de nuez", 335.00, 30, 10),
      new Pastel("3L Campechano","http://trigalesdeoro.com.mx/images/campechano-u13147.png", "Pastel 3L combinado de vainilla y chocolate embebido en dos jarabes con crema de café y chocolate", 335.00, 30, 10),
      new Pastel("3L Chococream","http://trigalesdeoro.com.mx/images/chococream-u13362.png", "Pastel 3L combinado de vainilla y chocolate con mermelada de zarzamora, crema de nata y chocolate oscuro", 335.00, 30, 10),
      new Pastel("3L Bocado de cielo","http://trigalesdeoro.com.mx/images/3l%20el%20bocado%20de%20cielo-u15797.png", "Pastel 3L de vainilla con flan napolitano y cheesecake con chocolate blanco", 335.00, 30, 10),
      new Pastel("3L Fresas con crema","http://trigalesdeoro.com.mx/images/fresascon%20crema-u13476.png", "Pastel 3L de vainilla con queso crema y fresas con crema de nata", 335.00, 30, 10),
      new Pastel("3L Guardias","http://trigalesdeoro.com.mx/images/3l%20guardias-u15834.png", "Pastel 3L con pan de chocolate, galleta de chocolate y almendras", 335.00, 30, 10),
      new Pastel("3L Tequila","http://trigalesdeoro.com.mx/images/3l%20al%20tequila-u16063.png", "Pastel 3L con pan de vainilla, relleno de pasas maceradas en tequila y crema de vainilla", 335.00, 30, 10),
      new Pastel("3L Enjambre","http://trigalesdeoro.com.mx/images/enjambre-u15905.png", "Pastel 3L de chocolate con nueces, almendras, avellanas, galleta y trozos de chocolate", 335.00, 30, 10),
      new Pastel("3L Supremo","http://trigalesdeoro.com.mx/images/3%20l%20supremo-u15944.png", "Pastel 3L de vainilla, crema de chocolate con almendras, trozos de chocolate, truffa y cubierto de crema de nata", 335.00, 30, 10),
      new Pastel("3L Delirio de Chocolate","http://trigalesdeoro.com.mx/images/3l%20delirio%20chocolate-u15985.png", "Pastel 3L con pan de chocolate, relleno de ganash de chocoloate oscuro", 335.00, 30, 10),
      new Pastel("3L Capuchino Plus","http://trigalesdeoro.com.mx/images/3l%20capuccino-u16042.png", "Pastel 3L con pan de chocolate, relleno de crema de café con nueces picadas y una taza hecha de chocolate", 335.00, 30, 10),
      new Pastel("3L Capuchino Especial","http://trigalesdeoro.com.mx/images/capucino%20esp-u16433.png", "Pastel 3L de chocolate, con crema de café y nata", 335.00, 30, 10),
      
    ];
   }

  ngOnInit(): void {
  }

}
