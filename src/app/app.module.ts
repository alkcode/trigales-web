import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from '../app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios/servicios.component';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
