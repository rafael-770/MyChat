import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages = [];

  constructor() { }

  ngOnInit() {
  }

  AddClick(valMsg) {
    let c = {
      idMsg : this.messages.length,
      textMsg : valMsg,
      msgDate : new Date
    }
    this.messages.push(c);
  }
}
