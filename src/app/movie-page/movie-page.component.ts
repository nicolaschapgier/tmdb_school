import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  public movieId!: any;

  constructor(public route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.getMovieId();
    this.movieInfos(this.movieId);
    this.movieActeur(this.movieId);
  }

  // On récupère l'ID du movie

  getMovieId() {
    this.route.params.subscribe((params) => {
      this.movieId = parseInt(params['popMoviesId']);
    });
  }

  // On récupère les infos du movie

  infos!: any;
  movieInfos(movieId: number) {
    this.dataService.getMovieById(movieId).subscribe((data) => {
      this.infos = data;
      // console.log(this.infos);
    });
  }

  // On récupère les acteurs du movie

  actors!: any;
  movieActeur(movieId: number) {
    this.dataService.getActing(movieId).subscribe((data) => {
      this.actors = data.cast;
    });
  }

  // Gestion des favoris avec le local storage

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
