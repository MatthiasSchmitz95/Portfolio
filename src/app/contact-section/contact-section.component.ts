import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  constructor(private myService: MyServiceService){

  }
  public scrollTo(elementId: string): void {
    this.myService.scrollTo(elementId);
  }

  inputCheck(inputId:string,errId:string){
    console.log(inputId);
    let check = document.getElementById(inputId) as HTMLInputElement;
    let err = document.getElementById(errId);
    const isValid = check.checkValidity();
    
    if (check.value.length > 2 && isValid) {
      check.classList.remove('error');
      check.classList.add('viable');
      err.style.display = 'none';
    }

    else{
      check.classList.remove('viable');
      check.classList.add('error');
      err.style.display = 'block';
    }

  }

}
