import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent {
  @Input() movie!: any;

  constructor(private dataService: DataService) {}

  fav(data: any) {
    this.dataService.favFromService(data);
  }

  isInStorageFromService(info: any) {
    return this.dataService.isInStorage(info);
  }
}
