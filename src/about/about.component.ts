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
    showSecret = false;
    log: number[] = []
    constructor(){
     
    }
    onSendMessage(){
      this.kintiaWillText = true;
      //  this.message = 'Thanks for contacting KK';
    }

    toggleDisplay(){
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length + 1);
      // this.log.push(new Date());

    }
     

}
