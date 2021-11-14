import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from '../app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios/servicios.component';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';
import { PastelesComponent } from './components/producto/pasteles/pasteles.component';
import { PaysflanesComponent } from './components/producto/paysflanes/paysflanes.component';
import { IndividualesComponent } from './components/producto/individuales/individuales.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaysencilloComponent } from './components/producto/pf/paysencillo/paysencillo.component';
import { PaydecoradoComponent } from './components/producto/pf/paydecorado/paydecorado.component';
import { FlanesComponent } from './components/producto/pf/flanes/flanes.component';
import { EnvinadoComponent } from './components/producto/pastel/envinado/envinado.component';
import { BarrasComponent } from './components/producto/pastel/barras/barras.component';
import { EventosComponent } from './components/producto/pastel/eventos/eventos.component';
import { TreslechesComponent } from './components/producto/pastel/tresleches/tresleches.component';
import { BotonUPComponent } from './components/boton-up/boton-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    PedidosComponent,
    PastelesComponent,
    PaysflanesComponent,
    IndividualesComponent,
    FooterComponent,
    PaysencilloComponent,
    PaydecoradoComponent,
    FlanesComponent,
    EnvinadoComponent,
    BarrasComponent,
    EventosComponent,
    TreslechesComponent,
    BotonUPComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
