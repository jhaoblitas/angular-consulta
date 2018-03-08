import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../_service/chat.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  conversacion: string;

  constructor(private chat: ChatService) {}
  
  ngOnInit() {}

  sendMessage() {
    this.chat.sendMsg(this.conversacion);
    this.conversacion = "";
  }

}
