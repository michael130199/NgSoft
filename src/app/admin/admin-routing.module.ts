import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../services/admin.guard';

//Componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const adminRoutes: Routes= [
    {
        path: 'admin-panel',
        component: MainComponent,
        canActivate: [AdminGuard],
        children: [//admin-panel/lo que sea
            {path: '', redirectTo: 'listado', pathMatch: 'full'},
            {path: 'listado', component: ListComponent},
            {path: 'agregar', component: AddComponent},
            {path: 'editar/:id', component: EditComponent}
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}