import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  //socket: any ;

  public socketStatus = false;

  constructor( public socket : Socket) {
    //this.socket = {};
  }
  // socketConnect(){
  //   this.socket = io('http://localhost:3000',{
  //     withCredentials: true,
  //     autoConnect: true, //cuando esta se cree se conectara automaticament
  //     extraHeaders: { Authorization: `Bearer ${localStorage.getItem('newToken')}` }
  //   })
  // }

  checkStatus(){
    // son observables, siempre estarán pendientes de lo que
    // suceda con el evento connect y disconnect
    this.socket.on('connect', ()=>{
      console.log('Conectado a Fernando - servidor');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', ()=>{
      console.log('Desconectado a Fernando - servidor');
      this.socketStatus = false;
    })
  }

  emit( evento: string, payload?: any, callback?: Function){
    // disparo un evento hacia el servidor
    this.socket.emit(evento, payload, callback);
    console.log(this.socket.emit(evento, payload, callback));
  }
  listen( evento: string) {
    //regresa un observable -> permite suscribir o desuscribir de salas de chat
    //para no recibir más notificaciones
    return this.socket.fromEvent(evento);
  }

}
