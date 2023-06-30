import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent {
  sources = [
    '../../assets/icons/Github button.svg',
    '../../assets/icons/Email button.svg',
    '../../assets/icons/Linkedin button.svg', 
  ]

}
