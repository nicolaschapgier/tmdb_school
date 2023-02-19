import { Component, Input } from '@angular/core';
import { LocalService } from 'src/app/storageAndFav/local.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  @Input() movie!: any;

  constructor(private localService: LocalService) {}

  fav(data: any) {
    this.localService.favFromService(data);
  }

  isInStorageFromService(info: any) {
    return this.localService.isInStorage(info);
  }
}
