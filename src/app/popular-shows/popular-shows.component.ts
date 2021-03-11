import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-shows',
  templateUrl: './popular-shows.component.html',
  styleUrls: ['./popular-shows.component.scss']
})
export class PopularShowsComponent implements OnInit {
 
@Input() allShows: any;
popularShows: any = [];
ratingLimit = 9;
  constructor() { }
  
  ngOnInit(): void {
    console.log('Total shows:', this.allShows);
    // filters all shows by rating threshold assumed (ratingLimit:9)
    this.popularShows = this.allShows.filter((show:any) => show.rating.average > this.ratingLimit);
    console.log('popular shows', this.popularShows);
  }
}
