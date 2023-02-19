import { Component, Input } from '@angular/core';
import { LocalService } from 'src/app/storageAndFav/local.service';

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.css'],
})
export class InputResultComponent {
  @Input() movieFromInput!: any;

  constructor(private localService: LocalService, ) {}

  fav(data: any) {
    this.localService.favFromServiceId(data);
  }

  isInStorageFromService(info: any) {
    return this.localService.isInStorage(info);
  }
}
