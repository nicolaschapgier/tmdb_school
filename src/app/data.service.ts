import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Films populaire du moment
  getPopularMovies(): Observable<any> {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/popular?api_key=8cf693bf63d50e4511be5b59e6475d9c&language=en-FR&page=1'
    );
  }

  // Prochainement dans les salles
  getUpcoming(): Observable<any> {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=8cf693bf63d50e4511be5b59e6475d9c&language=en-FR&page=1'
    );
  }

  // Les films les mieux notés
  getTopRated(): Observable<any> {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=8cf693bf63d50e4511be5b59e6475d9c&language=en-US&page=1'
    );
  }

  // Recherche un film par son ID
  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=8cf693bf63d50e4511be5b59e6475d9c&language=en-FR'
    );
  }

  // Recherche acteur d'un film par ID
  getActing(id: number): Observable<any> {
    return this.http.get<any>(
      `
      https://api.themoviedb.org/3/movie/${id}/credits?api_key=8cf693bf63d50e4511be5b59e6475d9c&language=en-FR`
    );
  }
}
