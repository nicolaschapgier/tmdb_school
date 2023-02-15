import { Component, OnChanges } from '@angular/core';

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
  array: any = [];

  loadData() {
    for (let i = 0; i < localStorage.length; i++) {
      let movieTitle = localStorage.key(i);
      let data = JSON.parse(localStorage.getItem(movieTitle!)!);
      this.array.push(data);
      console.log(this.array);
    }
  }

  faIsClicked!: boolean;

  remToFav(data: any) {
    localStorage.removeItem(data.title);
  }

  isInStorage(info: any) {
    for (let i = 0; i < localStorage.length; i++) {
      if (info.includes(localStorage.key(i)!)) {
        return true;
      }
    }
    return false;
  }
}
