import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('textField') textField: ElementRef;
  @ViewChild('send') send: ElementRef;



  inputCheck(inputId: string, errId: string) {
    console.log(inputId);
    let check = document.getElementById(inputId) as HTMLInputElement;
    let err = document.getElementById(errId);
    const isValid = check.checkValidity();

    if (check.value.length > 2 && isValid) {
      check.classList.remove('error');
      check.classList.add('viable');
      err.style.display = 'none';
    }

    else {
      check.classList.remove('viable');
      check.classList.add('error');
      err.style.display = 'block';
    }

  }

  textCheck(textId: string, errId: string) {

    console.log(textId);
    let check = document.getElementById(textId) as HTMLInputElement;
    let err = document.getElementById(errId);

    if (check.value.length > 2) {
      check.classList.remove('err-message');
      check.classList.add('viable-message');
      err.style.display = 'none';
    }

    else {
      check.classList.remove('viable-message');
      check.classList.add('err-message');
      err.style.display = 'flex';
    }

  }

  async sendMail() {
    //action="https://matthias-schmitz.developerakademie.net/send_mail.php"
    let nameField = document.getElementById('inputName') as HTMLInputElement;
    let emailField = document.getElementById('inputEmail') as HTMLInputElement;
    let textField = document.getElementById('inputMessage') as HTMLInputElement;
    let send = this.send.nativeElement;
    this.disableFields();
    //Animation

    this.showLoading();
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', textField.value);
    await fetch('https://matthias-schmitz.developerakademie.net/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    this.enableFields();
    this.finishedLoading();
    this.resetValue();

  }

  disableFields() {
    let nameField = document.getElementById('inputName') as HTMLInputElement;
    let emailField = document.getElementById('inputEmail') as HTMLInputElement;
    let textField = document.getElementById('inputMessage') as HTMLInputElement;
    let send = this.send.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    textField.disabled = true;
    send.disabled = true;

  }

  enableFields() {
    let nameField = document.getElementById('inputName') as HTMLInputElement;
    let emailField = document.getElementById('inputEmail') as HTMLInputElement;
    let textField = document.getElementById('inputMessage') as HTMLInputElement;
    let send = this.send.nativeElement;

    nameField.disabled = false;
    emailField.disabled = false;
    textField.disabled = false;
    send.disabled = false;
  }

  resetValue() {
    let nameField = document.getElementById('inputName') as HTMLInputElement;
    let emailField = document.getElementById('inputEmail') as HTMLInputElement;
    let textField = document.getElementById('inputMessage') as HTMLInputElement;
    let send = this.send.nativeElement;

    nameField.value = '';
    emailField.value = '';
    textField.value = '';

  }

  showLoading(){
    document.getElementById('loader').style.display = '';
  }

  finishedLoading(){
    let nameField = document.getElementById('inputName') as HTMLInputElement;
    let emailField = document.getElementById('inputEmail') as HTMLInputElement;
    let textField = document.getElementById('inputMessage') as HTMLInputElement;
    document.getElementById('loader').style.display = 'none';
    document.getElementById('success').style.display = 'flex';
    setTimeout(()=>{
      document.getElementById('success').style.display = 'none';
    },2500)

    
    nameField.classList.remove('viable');
    emailField.classList.remove('viable');
    textField.classList.remove('viable-message');
  }

  


}
