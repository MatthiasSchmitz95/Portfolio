import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  clicked = true;
  scrollTo(id:string){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }


  constructor() { }
}
