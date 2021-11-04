import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './app/components/inicio/inicio/inicio.component';
import { NosotrosComponent } from './app/components/nosotros/nosotros/nosotros.component';
import { ServiciosComponent } from './app/components/servicios/servicios/servicios.component';
import { PedidosComponent } from './app/components/pedidos/pedidos/pedidos.component';
import { PastelesComponent } from './app/components/producto/pasteles/pasteles.component';
import { PaysflanesComponent } from './app/components/producto/paysflanes/paysflanes.component';
import { IndividualesComponent } from './app/components/producto/individuales/individuales.component';



const appRoutes: Routes=[
    {path:'', component: InicioComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'servicios', component: ServiciosComponent},
    {path:'pedidos', component: PedidosComponent},
    {path:'pasteles', component: PastelesComponent},
    {path:'pays-flanes', component: PaysflanesComponent},
    {path:'individuales', component: IndividualesComponent},

];


//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);