import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AtencionComponent } from './atencion/atencion.component';
import { TicketComponent } from './atencion/ticket/ticket.component';
import { VentanillaComponent } from './atencion/ventanilla/ventanilla.component';
import { ClienteComponent } from './atencion/cliente/cliente.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { AppRoutingModule } from './app-routing.module';
import { ChatService } from './_service/chat.service';
import { WebSocketService } from './_service/websocket.service';


@NgModule({
  declarations: [
    AppComponent,
    AtencionComponent,
    TicketComponent,
    VentanillaComponent,
    ClienteComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ComboBoxDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ChatService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }