import { Component } from '@angular/core';

@Component({
  selector: 'style-component',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
    ourServices: any = []
    serverStatus: string = 'offline';
    serviceName: string = '';
    serviceDescription: string= '';
    constructor(){
     
    }
    getColor(){
    
      return this.serverStatus === 'online' ? 'green' : 'lightgreen';
    }
     

    // this.ourServices.push(this.ourServices)

    onSubmit() {

      const serviceData = {
        service: this.serviceName,
        description: this.serviceDescription
      };

      this.ourServices.push(serviceData);
      // Log the updated array for testing
    console.log('Our Services:', this.ourServices);
      // Here, you can handle the form submission logic
      console.log('Service:', this.serviceName);
      console.log('Description:', this.serviceDescription);

       // Reset the form fields
    this.serviceName = '';
    this.serviceDescription = '';
    }
  }

