import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrollTo(id:string){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

}
