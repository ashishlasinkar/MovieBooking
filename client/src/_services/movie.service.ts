import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/_models/movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  baseUrl = environment.appUrl;

  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get<Movie[]>('https://localhost:5001/movies');
  }
}
