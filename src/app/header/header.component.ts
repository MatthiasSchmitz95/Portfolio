import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private myService: MyServiceService) {

  }
  public scrollTo(elementId: string, spanId: string): void {
    this.myService.scrollTo(elementId);
    this.closeMenu();
    this.addUnderline(spanId);

  }

  openBurgerMenu() {
    if (this.myService.clicked) {
      this.openMenu();
      

    }
    else {
      this.closeMenu();
    }

  }

  addUnderline(spanId) {
    document.getElementById('span-about-me').style.display = "none";
    document.getElementById('span-skills').style.display = "none";
    document.getElementById('span-portfolio').style.display = "none";
    document.getElementById('span-contact').style.display = "none";
    document.getElementById(spanId).style.display = "block";

  }

  openMenu() {
    let menu = document.getElementById('hidden-menu');
    menu.classList.add('menu-position-clicked');
    this.myService.clicked = false;
    this.disableScroll();
   // this.changeImg();

  }

  closeMenu() {
    let menu = document.getElementById('hidden-menu');
    menu.classList.remove('menu-position-clicked');
    this.myService.clicked = true;
    this.enableScroll();
  //  this.changeImg();

  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflowY = 'auto';

  }

  changeImg(){
    let burger = document.getElementById('burger') as HTMLImageElement;
    if(!this.myService.clicked){
      burger.src = "assets/burger/burger-half-closed.png";
      setTimeout(()=>{
        burger.src = "assets/burger/burger-closed.png";
      },100);
      
    }
    else{
      burger.src = "assets/burger/burger-standard.png";
    }
    

    
  }
}
