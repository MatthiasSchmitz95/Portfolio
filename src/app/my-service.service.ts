import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  clicked = true;

  changeImg(){
    let burger = document.getElementById('burger') as HTMLImageElement;
    if(!this.clicked){
      burger.src = "assets/burger/burger-half-closed.png";
      setTimeout(()=>{
        burger.src = "assets/burger/burger-closed.png";
      },100);
      
    }
    else{
      burger.src = "assets/burger/burger-standard.png";
    }
  }



  scrollTo(id:string){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

  


  constructor() { }
}
