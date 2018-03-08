import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionComponent } from './atencion/atencion.component';
import { AdminComponent } from './admin/admin.component';
import { TicketComponent } from './atencion/ticket/ticket.component';
import { VentanillaComponent } from './atencion/ventanilla/ventanilla.component';
import { ClienteComponent } from './atencion/cliente/cliente.component';

const appRoutes: Routes = [
    {
        path: 'atencion', component: AtencionComponent,
        children: [
            { path: '', component: TicketComponent },
            { path: 'ticket', component: TicketComponent },
            { path: 'ventanilla', component: VentanillaComponent },
            { path: 'cliente', component: ClienteComponent }
        ]
    },
    { path: 'admin', component: AdminComponent },
    { path: '', redirectTo: 'atencion', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
