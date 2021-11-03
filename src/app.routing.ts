import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './app/components/inicio/inicio/inicio.component';
import { NosotrosComponent } from './app/components/nosotros/nosotros/nosotros.component';
import { ServiciosComponent } from './app/components/servicios/servicios/servicios.component';



const appRoutes: Routes=[
    {path:'', component: InicioComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'servicios', component: ServiciosComponent},
];


//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);