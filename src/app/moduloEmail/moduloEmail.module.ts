// Importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GuardarEmailComponent } from './components/guardarEmail/guardarEmail.component';
import { MostrarEmailComponent } from './components/mostrarEmail/mostrarEmail.component';
import { MainEmailComponent } from './components/mainEmail/mainEmail.component';

//Decorar ngModule Para Cargar los componentes y la configuracion del modulos

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports: [
        MainEmailComponent
    ]
})

export class ModuloEmailModule { }
