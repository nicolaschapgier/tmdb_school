import { Component, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css'],
})
export class FavorisComponent implements OnChanges {
  ngOnInit() {
    this.loadData();
  }
  ngOnChanges(e: any) {
    console.log(e);
  }

  constructor(private dataService: DataService) {}

  array: any = [];

  loadData() {
    for (let i = 0; i < localStorage.length; i++) {
      let movieKeyName = localStorage.key(i);

      let data = JSON.parse(localStorage.getItem(movieKeyName!)!);
      this.array.push(data);
      console.log(this.array);
    }
  }

  faIsClicked!: boolean;

  remToFav(data: any) {
    localStorage.removeItem(data);
  }

  isInStorageFromService(info: any) {
    return this.dataService.isInStorage(info);
  }

  storage(info: any): any {
    for (let i = 0; i < localStorage.length; i++) {
      (typeof info === 'string' && info.includes(localStorage.key(i)!)) ||
      (typeof info === 'number' &&
        info.toString().includes(localStorage.key(i)!))
        ? true
        : false;
    }
  }
}
