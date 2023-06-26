import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {
  parentService: { id: number; name: string; description: string;  image: string;}= 
  
    { 
      id: 0, 
      name: '', 
    description: '', 
    image: '' };
  // serviceName!: string;
  // serviceDescription!: string;
  // serviceImage!: string;
  @Output() submitEvent = new EventEmitter<Object>();

  onSubmit(data: Object) {
    this.submitEvent.emit(data);
    // Here you can access the submitted form values
    console.log('Service Name:', this.parentService.id);
    console.log('Service Name:', this.parentService.name);
    console.log('Service Description:', this.parentService.description);
    console.log('Service Image:', this.parentService.image);
// console.log(this.serviceForm)

    // Perform any additional logic or API calls
    // ...
  }
}

