import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiKey } from '../apiKey';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Films populaire du moment
  getPopularMovies(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}c&language=en-FR&page=1`
    );
  }

  // Prochainement dans les salles
  getUpcoming(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-FR&page=1`
    );
  }

  // Les films les mieux notés
  getTopRated(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );
  }

  // Recherche un film par son ID
  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/
        ${id}?api_key=${apiKey}&language=en-FR`
    );
  }

  // Recherche acteur d'un film par ID
  getActing(id: number): Observable<any> {
    return this.http.get<any>(
      `
      https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-FR`
    );
  }

  // Recherche info sur l'acteur

  getActorInfo(id: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-FR`
    );
  }

  // Recherche liste des films dans lesquels l'acteur à joué
  getActorMovies(movie_id: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/person/${movie_id}/credits?api_key=${apiKey}&language=en-US`
    );
  }

  // Recherche d'un film via l'input
  getMovieByInput(input: string): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${input}&page=1&include_adult=false&region=FR`
    );
  }
}
