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
  dadsprofile: string;
  kirat: string;
  angularAppointment: string;
  magiccakeAlt: string;
  mockprofileAlt: string;
  bestcityguideAlt: string;
  layouttechAlt: string;
  jsdomAlt: string;
  jsdrumkitAlt: string;
  catclickAlt: string;
  apifetchAlt: string;
  lightboxAlt: string;
  dadsprofileAlt: string;
  kiratAlt: string;
  angularAppointmentAlt: string;

  // selection: string;

  htmlcss: boolean;
  js: boolean;
  wordpress: boolean;
  phpmysql: boolean;
  angular: boolean;

  constructor() {}

  ngOnInit() {
    this.setUrl();
    this.setAlt();
    this.setAll();
  }
  setAll() {
    this.htmlcss = true;
    this.js = true;
    this.wordpress = true;
    this.phpmysql = true;
    this.angular = true;
  }
  setHC() {
    this.htmlcss = true;
    this.js = false;
    this.wordpress = false;
    this.phpmysql = false;
    this.angular = false;
  }
  setJS() {
    this.htmlcss = false;
    this.js = true;
    this.wordpress = false;
    this.phpmysql = false;
    this.angular = false;
  }
  setWP() {
    this.htmlcss = false;
    this.js = false;
    this.wordpress = true;
    this.phpmysql = false;
    this.angular = false;
  }
  setPSql() {
    this.htmlcss = false;
    this.js = false;
    this.wordpress = true;
    this.phpmysql = true;
    this.angular = false;
  }
  setng() {
    this.htmlcss = false;
    this.js = false;
    this.wordpress = false;
    this.phpmysql = false;
    this.angular = true;
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
    this.dadsprofile = '../../assets/image/works/keshavattri.png';
    this.kirat = '../../assets/image/works/phpmysql.png';
    this.angularAppointment = '../../assets/image/works/appointmentapp2.png';
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
    this.dadsprofileAlt =
      'A profile website (in Nepali language) of Swami Keshav Attri, build in WordPress using A SiteOrigin Theme. "Voluntarily developed"';
    this.kiratAlt =
      'Mock data of a PHP / MySql based web app on a local server for a non profit organization. "Voluntarily developed"';
    this.angularAppointmentAlt = `This application is designed to Create, View
       and Delete appointment schedule for each user logged
       in with their respective Google account.`;
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
  dadsprofileCh() {
    this.dadsprofile = '../../assets/image/works/keshavattri2.png';
  }
  kiratCh() {
    this.kirat = '../../assets/image/works/phpmysql2.png';
  }
  angularAppointmentCh() {
    this.angularAppointment = '../../assets/image/works/appointmentapp.png';
  }

  select(selection) {
    selection = selection.target.value;
    if (selection === 'all') {
      this.setAll();
    } else if (selection === 'hc') {
      this.setHC();
    } else if (selection === 'js') {
      this.setJS();
    } else if (selection === 'wp') {
      this.setWP();
    } else if (selection === 'psql') {
      this.setPSql();
    } else if (selection === 'angular') {
      this.setng();
    }
    // console.log(selection.target.value);
  }
}
