import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  @Input() popMovies!: any;

  faIsClicked: boolean = false;

  addToFav(data: any) {
    if (this.faIsClicked == false) {
      localStorage.setItem(data.title, JSON.stringify(data));
    } else {
      localStorage.removeItem(data.title);
    }
    this.faIsClicked = !this.faIsClicked;
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
