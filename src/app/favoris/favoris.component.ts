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
      let movieId = localStorage.key(i);

      let data = JSON.parse(localStorage.getItem(movieTitle! && movieId!)!);
      // let dataId = JSON.parse(localStorage.getItem(movieId!)!);
      this.array.push(data);
      console.log(this.array);
    } // tout fonctionne ça ne s'affiche pas car la star reste non cliquée
  }

  faIsClicked!: boolean;

  remToFav(data: any) {
    localStorage.removeItem(data);
  }

  isInStorage(info: any) {
    for (let i = 0; i < localStorage.length; i++) {
      if (typeof info == 'string') {
        if (info.includes(localStorage.key(i)!)) {
          return true;
        }
      } else if (typeof info === 'number') {
        if (info.toString().includes(localStorage.key(i)!)) {
          return true;
        }
      }
    }
    return false;
  }


  storage(info: any): any {
    for (let i = 0; i < localStorage.length; i++) {
      (typeof info === 'string' && info.includes(localStorage.key(i)!)) ||
      (typeof info === 'number' && info.toString().includes(localStorage.key(i)!))
        ? true
        : false;
    }
  }
}
