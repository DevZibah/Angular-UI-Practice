import { Component, OnInit } from '@angular/core';
import { UserDetails } from './interface';
import { service } from './service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  errorMessage = '';
  users: UserDetails[] = [];
  indUser: any;

  constructor(private service: service) {}

  ngOnInit(): void {
    // Getting the users data immediately the app initializes
    this.getData();
  }

  // this is a function(fn) to get all users from the fake database
  private getData() {
    this.service.getData().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  viewDataById(userId: number) {
    if (userId) {
      this.service.getDataById(userId).subscribe((response) => {
        this.indUser = response;
        console.log(this.indUser);
      });
    }
  }
}
