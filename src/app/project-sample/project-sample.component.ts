import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-sample',
  templateUrl: './project-sample.component.html',
  styleUrls: ['./project-sample.component.scss']
})
export class ProjectSampleComponent implements OnInit {
  @Input() img: string;
  @Input() skills: String;
  @Input() description: string;
  @Input() title: string;

  ngOnInit(): void {
    console.log(this.img,this.skills);
  }


}
