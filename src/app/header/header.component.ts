import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private myService: MyServiceService){

  }
  public scrollTo(elementId: string): void {
    this.myService.scrollTo(elementId);
  }


}
