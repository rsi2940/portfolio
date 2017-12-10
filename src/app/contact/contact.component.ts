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

  ngOnInit() {
    this.onCancel();
  }
  onCancel() {
    this.clientEmail = '';
    this.clientMessage = '';
    this.clientName = '';
  }
  onSubmit() {
    if (!this.clientName) {
      this.clientName = '** required **';
    }
    if (!this.clientMessage) {
      this.clientMessage = '** required **';
    }
    if (!this.clientEmail) {
      this.clientEmail = '** required **';
    }
  }
}
