import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../_service/chat.service';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.css']
})
export class VentanillaComponent implements OnInit {

  arreglo2: String[] = [];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.arreglo2.push(msg.text);
    })
  }

}
