import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/api/data.service';
import { LocalService } from 'src/app/storageAndFav/local.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent {
  @Input() movie!: any;

  constructor(private localService: LocalService) {}

  fav(data: any) {
    this.localService.favFromService(data);
  }

  isInStorageFromService(info: any) {
    return this.localService.isInStorage(info);
  }
}
