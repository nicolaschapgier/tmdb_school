import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent {

  @Input() topRated!: any;
  
}
