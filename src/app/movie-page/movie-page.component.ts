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

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = parseInt(params['popMoviesId']);
    });
    this.movieInfos(this.movieId);
    this.movieActeur(this.movieId);
  }

  infos!: any;
  movieInfos(movieId: number) {
    this.dataService.getMovieById(movieId).subscribe((data) => {
      this.infos = data;
      console.log(this.infos);
    });
  }

  actors!: any;
  movieActeur(movieId: number) {
    this.dataService.getActing(movieId).subscribe((data) => {
      this.actors = data.cast;
    });
  }
}
