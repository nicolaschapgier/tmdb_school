import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPageComponent } from './movieOrActor/actor-page/actor-page.component';
import { FavorisComponent } from './favoris/favoris.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviePageComponent } from './movieOrActor/movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'movie/:popMoviesId', component: MoviePageComponent },
  { path: 'actor/:actorsId', component: ActorPageComponent },
  { path: 'favoris', component: FavorisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
