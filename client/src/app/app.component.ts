import { Component, OnInit } from '@angular/core';
import { ChatService } from '../app/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-chat';
  message: string;
  messages: string[] = [];
  
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log("this.messages : " +this.messages)
        this.messages.push(message);
      });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
