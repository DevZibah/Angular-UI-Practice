import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css'],
})
export class ChatAppComponent implements OnInit {
  ngOnInit(): void {
    $('#action_menu_btn').click(function () {
      $('.action_menu').toggle();
    });
  }
}
