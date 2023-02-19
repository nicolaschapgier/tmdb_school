import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  // Gestion du local storage
  isInStorage(info: any) {
    for (let i = 0; i < localStorage.length; i++) {
      if (
        (typeof info == 'string' && info.includes(localStorage.key(i)!)) ||
        (typeof info === 'number' &&
          info.toString().includes(localStorage.key(i)!))
      ) {
        return true;
      }
    }
    return false;
  }


  // Gestion des favoris

  // // Avec le titre
  favFromService(data: any) {
    localStorage.getItem(data.title)
      ? localStorage.removeItem(data.title)
      : localStorage.setItem(data.title, JSON.stringify(data));
  }

  // // Avec l'ID
  favFromServiceId(data: any) {
    localStorage.getItem(data.id)
      ? localStorage.removeItem(data.id)
      : localStorage.setItem(data.id, JSON.stringify(data));
  }
}
