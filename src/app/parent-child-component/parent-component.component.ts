import { Component, OnInit } from '@angular/core';
import { UserDetails } from './interface';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  users: UserDetails[] = [];
  constructor() {}

  ngOnInit(): void {}
}
