import { Component, transition } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aboutClick: boolean;
  worksClick: boolean;
  contactClick: boolean;

  constructor() {}

  aboutClicked() {
    this.aboutClick = true;
    this.worksClick = false;
    this.contactClick = false;
  }
  worksClicked() {
    this.aboutClick = false;
    this.worksClick = true;
    this.contactClick = false;
  }
  contactClicked() {
    this.aboutClick = false;
    this.worksClick = false;
    this.contactClick = true;
  }
}
