import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const adminRoutes: Routes= [
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [//admin-panel/lo que sea
            {path: 'listado', component: ListComponent},
            {path: 'agregar', component: AddComponent},
            {path: 'editar', component: EditComponent}
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