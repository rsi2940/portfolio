import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showMore: boolean;
  moreText: string;
  constructor() {
    this.showMore = false;
    this.moreText = 'show more +';
  }

  ngOnInit() {}

  clickMore() {
    this.showMore = !this.showMore;
    this.moreText = this.showMore ? 'show less -' : 'show more +';
  }
}
