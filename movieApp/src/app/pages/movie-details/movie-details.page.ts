import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
 
  information = null;
 
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param movieService The movie Service to get data
   */
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
 
  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }
 
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}