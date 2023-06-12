import { Component } from '@angular/core';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    fName: string = 'KK';
    soulMate: string = '';
    age : number = 27;
    message: string = 'We are one text away';
    kintiaWillText = false;
    constructor(){
     
    }
    onSendMessage(){
      this.kintiaWillText = true;
      //  this.message = 'Thanks for contacting KK';
    }
     

}
