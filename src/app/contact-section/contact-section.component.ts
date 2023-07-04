import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  constructor(private myService: MyServiceService){

  }
  public scrollTo(elementId: string): void {
    this.myService.scrollTo(elementId);
  }


  }


