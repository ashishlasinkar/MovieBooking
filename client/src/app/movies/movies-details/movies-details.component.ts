import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/_models/Movie';
import { MovieService } from 'src/_services/movie.service';
import { Router } from '@angular/router';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  movie: Movie | undefined;
  galleryOptions!: NgxGalleryOptions[] | [];
  galleryImages!: NgxGalleryImage[] | [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMovie();
  }

  loadMovie() {
    this.movieService
      .getMovie(this.route.snapshot.paramMap.get('movieName'))
      .subscribe((mov) => {
        this.movie = mov;
        this.galleryOptions = [
          {
            width: '500px',
            height: '500px',
            imagePercent: 100,
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            preview: false,
          },
        ];

        this.galleryImages = this.getImages();
      });
  }

  BackToList() {
    this.router.navigate(['/movies']);
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.movie!.Stills) {
      imageUrls.push({
        small: photo,
        medium: photo,
        big: photo,
      });
    }
    return imageUrls;
  }
}
