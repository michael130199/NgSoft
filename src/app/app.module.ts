import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { routing, appRoutingProviders } from './app-routing.module';

//Importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloEmail/moduloEmail.module';


// Componentes 

import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';

import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent    } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { TinyComponent } from './components/tiny-simple/tiny-simple';

import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    TinyComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    EditorModule,
    ModuloEmailModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
