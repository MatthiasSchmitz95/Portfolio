import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-menu-slide-container',
  templateUrl: './menu-slide-container.component.html',
  styleUrls: ['./menu-slide-container.component.scss']
})
export class MenuSlideContainerComponent {
  clicked= true;
  constructor(private myService: MyServiceService){
    
  }
  public scrollTo(elementId: string): void {
    this.myService.scrollTo(elementId);
    this.closeMenu();
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
  this.clicked= false;
  this.enableScroll();
}

}