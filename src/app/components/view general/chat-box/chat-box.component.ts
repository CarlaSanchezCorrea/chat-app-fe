import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatBoxService } from 'src/app/services/chat-box.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, OnDestroy {
  
  prueba:any;
  text:string;
  mensajeSubscription?: Subscription;


  constructor(public chatService: ChatBoxService) {
    this.text = "";
  }

  ngOnInit(): void {
    this.mensajeSubscription = this.chatService.getMessage().subscribe( msg => {
      console.log(msg)
    })
  }

  ngOnDestroy() {
    //this.mensajeSubscription.unsubscribe();
  }

  sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    //una vez q tngo el objeto creado voy a usar el ss creado:
    this.chatService.sendMessage(messageInfo);
    this.text = "";
  }

}
