import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //constructor(public messageService: MessageService) { }
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  getMessages(): string[] {
    return this.messageService.messages;
  }

  clearMessage(): void {
    this.messageService.clear();
  }

}
