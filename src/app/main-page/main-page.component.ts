import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dataService: DataService) {}

  popularMovies!: any;
  upcoming!: any;
  top!: any;

  ngOnInit() {
    this.popular();
    this.upComing();
    this.topRated();
  }

  arrayFromInput!: any;
  moviesReceiveFromInput(movieInput: any): void {
    this.arrayFromInput = movieInput;
    console.log(this.arrayFromInput);
  }


  popular() {
    this.dataService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
      // console.log(this.popularMovies);
    });
  }

  upComing() {
    this.dataService
      .getUpcoming()
      .subscribe((data) => (this.upcoming = data.results));
  }

  topRated() {
    this.dataService
      .getTopRated()
      .subscribe((data) => (this.top = data.results));
  }
}
