import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/_models/movie';
import { MovieService } from 'src/_services/movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movieList$: Movie[] | undefined;
  constructor(private movieservice: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this.movieservice.getMovies().subscribe((responseMovie) => {
      this.movieList$ = responseMovie;
    });
  }
}
