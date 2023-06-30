import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent {
  images = [
    { name: 'Api', src: '../../assets/icons/Api.svg' },
    { name: 'Git', src: '../../assets/icons/Git.svg' },
    { name: 'Html', src: '../../assets/icons/Html.svg' },
    { name: 'Css', src: '../../assets/icons/Css.svg' },
    { name: 'WordPress', src: '../../assets/icons/Wp.svg' },
    { name: 'Scrum', src: '../../assets/icons/Scrum.svg' },
    { name: 'Typescript', src: '../../assets/icons/Ts.svg' },
    { name: 'Firebase', src: '../../assets/icons/Firebase.svg' },
    { name: 'Javascript', src: '../../assets/icons/Javascript.svg' },
    { name: 'Angular', src: '../../assets/icons/Angular.svg' },
  ];


}
