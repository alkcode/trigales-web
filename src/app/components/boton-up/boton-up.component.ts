import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-boton-up',
  templateUrl: './boton-up.component.html',
  styleUrls: ['./boton-up.component.scss']
})
export class BotonUPComponent implements OnInit {

  public muestraBoton = false;

  constructor(
    @Inject (DOCUMENT) private document:Document
  ) { }

    //  Hacemos que aparezca el boton que manda hacia arriba

    @HostListener('window:scroll',[])

    onWindowScroll():void{
      console.log('scroll');
       const yOffSet = window.pageXOffset;
       const scrollTop = this.document.documentElement.scrollTop;
       this.muestraBoton = (yOffSet || scrollTop) > 350;
    }
 
    onScrollTop():void{
     this.document.documentElement.scrollTop = 0;
    }
  

  ngOnInit(): void {
  }

}
