import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  magiccake: string;
  mockprofile: string;
  bestcityguide: string;
  layouttech: string;
  jsdom: string;
  jsdrumkit: string;
  catclick: string;
  apifetch: string;
  lightbox: string;

  magiccakeAlt: string;
  mockprofileAlt: string;
  bestcityguideAlt: string;
  layouttechAlt: string;
  jsdomAlt: string;
  jsdrumkitAlt: string;
  catclickAlt: string;
  apifetchAlt: string;
  lightboxAlt: string;
  constructor() {}

  ngOnInit() {
    this.setUrl();
    this.setAlt();
  }
  setUrl() {
    this.magiccake = '../../assets/image/works/magiccake.bmp';
    this.bestcityguide = '../../assets/image/works/bestcityguide.png';
    this.mockprofile = '../../assets/image/works/mockprofile.png';
    this.layouttech = '../../assets/image/works/responsivedesign.png';
    this.jsdom = '../../assets/image/works/jsdom.png';
    this.jsdrumkit = '../../assets/image/works/jsdrumkit.png';
    this.catclick = '../../assets/image/works/catclickermvo.png';
    this.apifetch = '../../assets/image/works/apifetchjs.png';
    this.lightbox = '../../assets/image/works/lightbox.png';
  }
  setAlt() {
    this.magiccakeAlt =
      'This is an imaginary recipe book concept of basic html and css learning. A static web page with a simple form.';
    this.mockprofileAlt = '';
    this.bestcityguideAlt = '';
    this.layouttechAlt = '';
    this.jsdomAlt = '';
    this.jsdrumkitAlt = '';
    this.catclickAlt = '';
    this.apifetchAlt = '';
    this.lightboxAlt = '';
  }

  magiccakeCh() {
    this.magiccake = '../../assets/image/works/magiccake2.png';
  }
  mockprofileCh() {
    this.mockprofile = '../../assets/image/works/mockprofile2.png';
  }
  bestcityguideCh() {
    this.bestcityguide = '../../assets/image/works/bestcityguide2.png';
  }
  layouttechCh() {
    this.layouttech = '../../assets/image/works/responsivedesign2.png';
  }
  jsdomCh() {
    this.jsdom = '../../assets/image/works/jsdom2.png';
  }
  jsdrumkitCh() {
    this.jsdrumkit = '../../assets/image/works/jsdrumkit2.png';
  }
  catclickCh() {
    this.catclick = '../../assets/image/works/catclickermvo2.png';
  }
  apifetchCh() {
    this.apifetch = '../../assets/image/works/apifetchjs2.png';
  }
  lightboxCh() {
    this.lightbox = '../../assets/image/works/lightbox2.png';
  }
}
