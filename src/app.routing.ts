import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InicioComponent } from './app/components/inicio/inicio/inicio.component';
import { NosotrosComponent } from './app/components/nosotros/nosotros/nosotros.component';
import { ServiciosComponent } from './app/components/servicios/servicios/servicios.component';
import { PedidosComponent } from './app/components/pedidos/pedidos/pedidos.component';
import { PastelesComponent } from './app/components/producto/pasteles/pasteles.component';
import { PaysflanesComponent } from './app/components/producto/paysflanes/paysflanes.component';
import { IndividualesComponent } from './app/components/producto/individuales/individuales.component';
import { PaysencilloComponent } from './app/components/producto/pf/paysencillo/paysencillo.component';
import { PaydecoradoComponent } from './app/components/producto/pf/paydecorado/paydecorado.component';
import { FlanesComponent } from './app/components/producto/pf/flanes/flanes.component';
import { TreslechesComponent } from './app/components/producto/pastel/tresleches/tresleches.component';
import { EnvinadoComponent } from './app/components/producto/pastel/envinado/envinado.component';
import { BarrasComponent } from './app/components/producto/pastel/barras/barras.component';
import { EventosComponent } from './app/components/producto/pastel/eventos/eventos.component';



const appRoutes: Routes=[
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    {path:'inicio', component: InicioComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'servicios', component: ServiciosComponent},
    {path:'pedidos', component: PedidosComponent},
    {path:'pasteles', component: PastelesComponent},
    {path:'pasteles/3-Leches', component: TreslechesComponent},
    {path:'pasteles/envinados', component: EnvinadoComponent},
    {path:'pasteles/barras', component: BarrasComponent},
    {path:'pasteles/eventos', component: EventosComponent},
    {path:'pays-flanes', component: PaysflanesComponent},
    {path:'pays-flanes/pays-sencillo', component: PaysencilloComponent},
    {path:'pays-flanes/pays-decorados', component: PaydecoradoComponent},
    {path:'pays-flanes/flanes', component:FlanesComponent},
    {path:'individuales', component: IndividualesComponent},

];


//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes,{ useHash: true });