import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-css-tricks',
  templateUrl: './css-tricks.component.html',
  styleUrls: ['./css-tricks.component.css'],
})
export class CssTricksComponent {
  // showPopUp: boolean = false;
  @ViewChild('homeSection', { read: ElementRef }) homeSection!: ElementRef;
  @ViewChild('contactSection', { read: ElementRef })
  contactSection!: ElementRef;
  @ViewChild('aboutSection', { read: ElementRef }) aboutSection!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  scrollTo(section: HTMLElement) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // openPopUpBox() {
  //   this.showPopUp = true;
  // }
  // closePopUpBox() {
  //   this.showPopUp = false;
  // }
}
