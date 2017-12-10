import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showMore: boolean;
  titleText: string;
  moreText: string;
  constructor() {
    this.showMore = false;
    this.titleText = 'click to show more';
    this.moreText = '+';
  }

  ngOnInit() {}

  clickMore() {
    this.showMore = !this.showMore;
    this.titleText = this.showMore ? 'chick to hide' : 'click to show more';
    this.moreText = this.showMore ? '-' : '+';
  }
}
