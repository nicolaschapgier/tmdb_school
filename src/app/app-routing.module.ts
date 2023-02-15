import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':popMoviesId', component: MoviePageComponent },
  { path: ':comMoviesTitle', component: MoviePageComponent },
  { path: ':topRatedTitle', component: MoviePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
