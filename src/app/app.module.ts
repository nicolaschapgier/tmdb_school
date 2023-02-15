import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { PopularComponent } from './mainRequest/popular/popular.component';
import { UpcomingComponent } from './mainRequest/upcoming/upcoming.component';
import { TopratedComponent } from './mainRequest/toprated/toprated.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { FormComponent } from './form/form.component';
import { ActorPageComponent } from './actor-page/actor-page.component';
import { FavorisComponent } from './favoris/favoris.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    PopularComponent,
    UpcomingComponent,
    TopratedComponent,
    MoviePageComponent,
    FormComponent,
    ActorPageComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
