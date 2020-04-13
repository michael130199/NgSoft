//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from '../services/admin.guard';
import { UserService } from '../services/user.service';
import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
    declarations: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent,
        ModalDeleteComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        BrowserAnimationsModule
    ],
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent,
        ModalDeleteComponent
    ],
    providers: [
        AdminGuard, 
        UserService
    ]
})


export class AdminModule {}