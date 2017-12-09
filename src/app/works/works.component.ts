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
      'This is an imaginary recipe book. Learning concept of basic html and css. A static web page with a simple form.';
    this.mockprofileAlt =
      'This is a mock portfolio of an emerging Front End Developer. It was an assignment assigned for responsive styling.';
    this.bestcityguideAlt =
      'A website of an imaginary city. It was learning more on mobile first responsive design.';
    this.layouttechAlt =
      'This is an assignment portfolio mockup mobile first design applying css flex';
    this.jsdomAlt =
      'This is a recreation of Best City Guide all from plain JavaScript.';
    this.jsdrumkitAlt =
      'JavaScript; learning the eventlisteners. A simple JSDrumkit';
    this.catclickAlt =
      'A catclicker inspired from udacity course of using MVC like representation in plain JavaScript.';
    this.apifetchAlt =
      'Learning API fetch; async await. Star Wars api fetch, listing all films and its details.';
    this.lightboxAlt =
      'One page application displaying gallery of photographs and implementation of live search light box';
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
