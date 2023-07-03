import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  scrollTo(id:string){
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }


  constructor() { }
}
