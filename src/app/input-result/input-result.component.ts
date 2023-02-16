import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.css'],
})
export class InputResultComponent {
  @Input() movieFromInput!: any;

  faIsClicked: boolean = false;

  addToFav(data: any) {
    if (this.faIsClicked == false) {
      localStorage.setItem(data.id, JSON.stringify(data));
    } else {
      localStorage.removeItem(data.id);
    }
    this.faIsClicked = !this.faIsClicked;
  }

  isInStorage(value: number): boolean {
    for (let i = 0; i < localStorage.length; i++) {
      if (value.toString().includes(localStorage.key(i)!)) {
        return true;
      }
    }
    return false;
  }
}
