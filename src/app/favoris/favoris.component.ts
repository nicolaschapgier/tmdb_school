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
    if (localStorage.length < 1) {
      location.reload(); // Recharge la page pour l'apparition du span "Aucun film ajouté au favoris"
    }
  }

  isInStorageFromService(info: any) {
    return this.dataService.isInStorage(info);
  }
}
