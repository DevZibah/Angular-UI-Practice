import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
})
export class ChatAppComponent implements OnInit, AfterViewInit {
  // This is a decorator that allows the component to access a particular template in the html file using #popup as a reference variable. It's used to open a modal in this case, the login UI.
  @ViewChild('popup', { static: false }) popup: any;

  roomId!: string;
  messageText!: string;
  messageArray: { user: string; message: string }[] = [];
  storageArray: any;

  showScreen = false;
  phone!: string;
  currentUser: any;
  selectedUser: any;

  // this is an array of users, their names, phone no, image and the rooms they exist in
  public userList = [
    {
      id: 1,
      name: 'Chisom',
      phone: '9876598765',
      image: 'assets/user/user-1.png',
      roomId: {
        2: 'room-1',
        3: 'room-2',
        4: 'room-3',
      },
    },
    {
      id: 2,
      name: 'Jumoke',
      phone: '9876543210',
      image: 'assets/user/user-2.png',
      roomId: {
        1: 'room-1',
        3: 'room-4',
        4: 'room-5',
      },
    },
    {
      id: 3,
      name: 'Luciana',
      phone: '9988776655',
      image: 'assets/user/user-3.png',
      roomId: {
        1: 'room-2',
        2: 'room-4',
        4: 'room-6',
      },
    },
    {
      id: 4,
      name: 'Ross',
      phone: '9876556789',
      image: 'assets/user/user-4.png',
      roomId: {
        1: 'room-3',
        2: 'room-5',
        3: 'room-6',
      },
    },
  ];

  // The constructor initializes the component and injects the NgbModal service and the ChatService.
  constructor(
    private modalService: NgbModal,
    private chatService: ChatService
  ) {}

  // we know that this lifecyle hook (ngOninit) is called when an app initializes. this function basically updates the messageArray when a new message is received.
  ngOnInit(): void {
    this.chatService
      .getMessage()
      .subscribe((data: { user: string; room: string; message: string }) => {
        if (this.roomId) {
          setTimeout(() => {
            // it stores the message from the local storage in the storageArray
            this.storageArray = this.chatService.getStorage();
            // if the value of roomId is same as the value in storage.roomId, it is stored in the variable(storeIndex)
            const storeIndex = this.storageArray.findIndex(
              (storage: { roomId: string }) => storage.roomId === this.roomId
            );
            // the messageArray contains specific messages from users. e.g (user1: 'hey, Jumoke')
            this.messageArray = this.storageArray[storeIndex].chats;
          }, 500);
        }
      });
  }

  // This lifecycle hook is called after the view has been initialized. it opens up the modal
  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  // this method opens a modal using the modalService.
  openPopup(content: any): void {
    this.modalService.open(content, { backdrop: 'static', centered: true });
  }

  // This method is called when a user logs in. It finds the entered phone number and matches it with the correlated number in the user list and sets it to the currentUser property.
  login(dismiss: any): void {
    this.currentUser = this.userList.find(
      (user) => user.phone === this.phone.toString()
    );
    this.userList = this.userList.filter(
      (user) => user.phone !== this.phone.toString()
    );

    // if the phone num of the current user exists, the chat app interface is shown and the login UI is dismissed
    if (this.currentUser) {
      this.showScreen = true;
      dismiss();
    }
  }

  // This method is called when a user selects another user to start a chat. It sets the selectedUser and determines the roomId based on the roomId mapping in the user list.
  selectUserHandler(phone: string): void {
    // here, when a user from a list of registered users is clicked, its number is been looked for in the userList and then when found, it is assigned an object containing that user's details.
    this.selectedUser = this.userList.find((user) => user.phone === phone);
    // since we already know the currentUser after a login, the selected user is assigned a room with the currentUser. nb: every user has one chat room they share
    this.roomId = this.selectedUser?.roomId[this.currentUser.id];
    // messageArray is been intialized to an empty array
    this.messageArray = [];

    // all the messages stored in the local storage is been assigned to the storageArray
    this.storageArray = this.chatService.getStorage();
    // if the value of the selectedUser's roomId is matched with a value in storage.roomId, it is stored in the variable(storeIndex)
    const storeIndex = this.storageArray.findIndex(
      (storage: { roomId: string }) => storage.roomId === this.roomId
    );

    // if storeIndex(a number) is greater than -1 i.e. from 0 upwards, the var(messageArray) should contain the selectedUser's message and the currentUsers message 
    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].chats;
    }

    // 
    this.join(this.currentUser.name, this.roomId);
  }

  // this method is simply called for the users in same room to join the room
  join(username: string, roomId: string): void {
    this.chatService.joinRoom({ user: username, room: roomId });
  }

  // this method is called when a user clicks on the send button. it basically sends message
  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser?.name,
      room: this.roomId,
      message: this.messageText,
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray.findIndex(
      (storage: { roomId: string }) => storage.roomId === this.roomId
    );

    if (storeIndex > -1) {
      this.storageArray[storeIndex].chats.push({
        user: this.currentUser?.name,
        message: this.messageText,
      });
    } else {
      const updateStorage = {
        roomId: this.roomId,
        chats: [
          {
            user: this.currentUser?.name,
            message: this.messageText,
          },
        ],
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }
}
