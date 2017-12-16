import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  clientName: string;
  nameErr: string;
  clientMessage: string;
  messageErr: string;
  clientEmail: string;
  emailErr: string;
  success: boolean;
  cm: boolean;
  ce: boolean;
  cn: boolean;
  constructor() {}

  ngOnInit() {
    this.onCancel();
  }
  onCancel() {
    this.clientEmail = '';
    this.clientMessage = '';
    this.clientName = '';
    this.emailErr = '';
    this.messageErr = '';
    this.nameErr = '';
    this.success = false;
    this.ce = false;
    this.cn = false;
    this.cm = false;
    // console.log(this.cm);
  }
  onSubmit() {
    this.clientEmail = this.clientEmail.trim();
    this.clientMessage = this.clientMessage.trim();
    this.clientName = this.clientName.trim();

    if (!this.clientName) {
      this.nameErr = '** required **';
      this.cn = false;
    } else {
      this.cn = true;
    }
    if (!this.clientMessage) {
      this.messageErr = '** required **';
      this.cm = false;
      // console.log(this.cm + 'if');
    } else {
      this.cm = true;
      console.log(this.cm);
    }
    if (!this.clientEmail) {
      this.emailErr = '** required **';
      this.ce = false;
    } else {
      this.ce = true;
    }
    if (!this.clientEmail.includes('@')) {
      this.emailErr = '** must be an Email **';
      this.ce = false;
    } else {
      this.ce = true;
    }
    if (this.ce && this.cm && this.cn) {
      this.success = true;
      setTimeout(() => {
        this.onCancel();
      }, 1000);
    }
  }
}
