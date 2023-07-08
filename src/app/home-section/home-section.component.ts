import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent {

  sources = [
    'assets/icons/Github button.svg',
    'assets/icons/Email button.svg',
    'assets/icons/Linkedin button.svg'
  ];
  links =[
    "https://github.com/MatthiasSchmitz95",
    "mailto:your-email@example.com",
    "https://www.linkedin.com/in/matthias-schmitz-1ba787282/"

  ]
  constructor(private myService: MyServiceService){

  }
  public scrollTo(elementId: string): void {
    this.myService.scrollTo(elementId);
  }

}
