import { Component, Input } from '@angular/core';


interface MyObject {
  id: number;
  name: string;
  description: string;
  image : string;
}

@Component({
  selector: 'service-component',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services: MyObject[] = [
    { id: 1, name: 'Service 1', description: 'Description for Service 1', image: 'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg' },
    { id: 2, name: 'Service 2', description: 'Description for Service 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvFtsKIlvhlTKCfcam4lTPunyqoXzSOtP1Y71suOgFF4cc4IAZNlDMIbQjgPFuw-KElE&usqp=CAU'  },
    { id: 3, name: 'Service 3', description: 'Description for Service 3', image: 'https://images.unsplash.com/photo-1568306841411-99fd385656d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'  }
  ];
  @Input() message1!: string;
  constructor() {}
}
