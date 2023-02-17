import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css'],
})
export class TopratedComponent {
  @Input() movie!: any;
  constructor(private dataService: DataService) {}

  fav(data: any) {
    this.dataService.favFromService(data);
  }

  isInStorageFromService(info: any) {
    return this.dataService.isInStorage(info);
  }
}
