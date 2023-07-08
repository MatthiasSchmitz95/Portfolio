import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-menu-slide-container',
  templateUrl: './menu-slide-container.component.html',
  styleUrls: ['./menu-slide-container.component.scss']
})
export class MenuSlideContainerComponent {

  constructor(private myService: MyServiceService){
    
  }
  public scrollTo(elementId: string,spanId:string): void {
    this.myService.scrollTo(elementId);
    this.closeMenu();
    this.addUnderline(spanId);
  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflowY = 'auto';

}
closeMenu() {
  let menu = document.getElementById('hidden-menu');
  menu.classList.remove('menu-position-clicked');
  this.myService.clicked = true;
  this.enableScroll();
  this.myService.changeImg();
}

addUnderline(spanId) {
  document.getElementById('span-about2').style.display = "none";
  document.getElementById('span-skills2').style.display = "none";
  document.getElementById('span-portfolio2').style.display = "none";
  document.getElementById('span-contact2').style.display = "none";
  document.getElementById(spanId).style.display = "block";

}

}