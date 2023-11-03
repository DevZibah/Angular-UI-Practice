import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // This is a private property that holds the Socket.IO client instance.
  private socket: Socket;
  // This is the URL where the Socket.IO server is hosted
  private url = 'http://localhost:3000';

  // The constructor initializes the service. It creates an instance of the Socket.IO client and connects it to the specified server URL. It also specifies which transports can be used
  constructor() {
    this.socket = io(this.url, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
  }

  // This method is used to join a specific chat room.
  joinRoom(data: any): void {
    this.socket.emit('join', data);
  }

  // This method takes a data parameter and emits a 'message' event to the server using the Socket.IO client. This is used to send a message to the chat room.
  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  // This method returns an observable that can be subscribed to in order to receive messages from the server
  getMessage(): Observable<any> {
    return new Observable<{ user: string; message: string }>((observer) => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }

  // This method retrieves chat data from local storage. It checks if there is any data stored under the key 'chats' and returns it. If no data is found, it returns an empty array.
  getStorage() {
    const storage: any = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  // This method stores chat data in local storage. It takes a data parameter, converts it to a JSON string, and stores it under the key 'chats'.
  setStorage(data: any) {
    localStorage.setItem('chats', JSON.stringify(data));
  }
}
