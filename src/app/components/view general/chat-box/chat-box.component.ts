import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatBoxService } from 'src/app/services/chat-box.service';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, OnDestroy {
  
  prueba:any;
  text:string;
  mensajeSubscription?: Subscription;


  constructor(
    public chatService: ChatBoxService,
    public socketService: SocketService,
    ) {

    this.text = "";
  }

  ngOnInit(): void {
    this.mensajeSubscription = this.chatService.getMessage().subscribe( msg => {
      console.log(msg)
    });
    console.log(this.mensajeSubscription);
  }

  ngOnDestroy(): void {
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
