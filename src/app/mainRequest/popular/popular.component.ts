import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  @Input() popMovies!: any;

  fav(data: any) {
    localStorage.getItem(data.title)
      ? localStorage.removeItem(data.title)
      : localStorage.setItem(data.title, JSON.stringify(data));
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
