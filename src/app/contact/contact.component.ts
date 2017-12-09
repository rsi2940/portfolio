import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  clientName: string;
  clientMessage: string;
  clientEmail: string;
  constructor() {}

  ngOnInit() {}
  onCancel() {
    console.log(this.clientEmail);
    this.clientEmail = '';
    this.clientMessage = '';
    this.clientName = '';
  }
}
