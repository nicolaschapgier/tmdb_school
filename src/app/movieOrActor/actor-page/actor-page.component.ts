import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/api/data.service';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css'],
})
export class ActorPageComponent {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  actorId!: number;

  ngOnInit() {
    this.getActorId();
    this.getActorInfo(this.actorId);
    this.getActorMoviesFromService(this.actorId);
  }

  // On récupère l'ID de l'acteur
  getActorId() {
    this.route.params.subscribe((params) => {
      this.actorId = parseInt(params['actorsId']);
    });
  }

  // On récupère les infos de l'acteur
  actorInfos!: any;
  getActorInfo(id: number) {
    this.dataService.getActorInfo(id).subscribe((data) => {
      this.actorInfos = data;
      // console.log(this.actorInfos);
    });
  }

  // On récupère les films dans lequel l'acteur à joué
  actorMovies!: any;
  getActorMoviesFromService(id: number) {
    this.dataService.getActorMovies(id).subscribe((data) => {
      this.actorMovies = data.cast;
      // console.log(this.actorMovies);
    });
  }
}
