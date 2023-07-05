import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
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

  textCheck(textId:string,errId:string){
   
    console.log(textId);
    let check = document.getElementById(textId) as HTMLInputElement;
    let err = document.getElementById(errId);
    
    if (check.value.length > 2) {
      check.classList.remove('err-message');
      check.classList.add('viable-message');
      err.style.display = 'none';
    }

    else{
      check.classList.remove('viable-message');
      check.classList.add('err-message');
      err.style.display = 'flex';
    }

  }


}
