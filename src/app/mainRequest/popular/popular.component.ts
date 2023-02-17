import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  @Input() movie!: any;

  constructor(private dataService: DataService) {}

  fav(data: any) {
    this.dataService.favFromService(data);
  }

  isInStorageFromService(info: any) {
    return this.dataService.isInStorage(info);
  }
}
