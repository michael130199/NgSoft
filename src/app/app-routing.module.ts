import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
  import { NgModule } from '@angular/core';
  NgModule Es un decorador para clases de módulo.

  import { ModuleWithProviders } from '@angular/core';
  ModuleWithProviders es la interfaz que se supone que debe ser devuelta por el forRootmétodo.  
*/

// Componentes
  //import { AppComponent } from './app.component';
  import { TiendaComponent } from './components/tienda/tienda.component';
  import { AnimalsComponent } from './components/animals/animals.component';
  import { ContactComponent } from './components/contact/contact.component';
  import { HomeComponent    } from './components/home/home.component';
  import { KeepersComponent } from './components/keepers/keepers.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'animales', component: AnimalsComponent},
  {path: 'contactos', component: ContactComponent},
  {path: 'cuidadores', component: KeepersComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 

