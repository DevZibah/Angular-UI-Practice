import { Component } from '@angular/core';

@Component({
  selector: 'app-css-tricks',
  templateUrl: './css-tricks.component.html',
  styleUrls: ['./css-tricks.component.css'],
})
export class CssTricksComponent {
  showPopUp: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openPopUpBox() {
    this.showPopUp = true;
  }
  closePopUpBox() {
    this.showPopUp = false;
  }
}
