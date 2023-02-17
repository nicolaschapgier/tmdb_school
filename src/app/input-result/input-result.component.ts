import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.css'],
})
export class InputResultComponent {
  @Input() movieFromInput!: any;

  constructor(private dataService: DataService) {}

  fav(data: any) {
    this.dataService.favFromServiceId(data);
  }

  isInStorageFromService(info: any) {
    return this.dataService.isInStorage(info);
  }
}
