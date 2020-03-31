import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing, appRoutingProviders } from './app-routing.module';

//Importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloEmail/moduloEmail.module';
import { AdminModule } from './admin/admin.module';

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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    TinyComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    EditorModule,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
