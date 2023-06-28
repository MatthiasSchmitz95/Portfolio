import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-sample',
  templateUrl: './project-sample.component.html',
  styleUrls: ['./project-sample.component.scss']
})
export class ProjectSampleComponent {
  @Input() img: string ='';
  @Input() skills: String  ='';
  @Input() description: string ='';
  @Input() text: string ='';


}
