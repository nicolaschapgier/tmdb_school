import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/api/data.service';
import { LocalService } from 'src/app/storageAndFav/local.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  public movieId!: any;

  constructor(
    public route: ActivatedRoute,
    private dataService: DataService,
    private localService: LocalService
  ) {}

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
  fav(data: any) {
    this.localService.favFromService(data);
  }


  isInStorageFromService(info: any) {
    return this.localService.isInStorage(info);
  }
}
