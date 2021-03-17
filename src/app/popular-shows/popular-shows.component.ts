import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-shows',
  templateUrl: './popular-shows.component.html',
  styleUrls: ['./popular-shows.component.scss']
})
export class PopularShowsComponent implements OnInit {
 
@Input() allShows: any;
popularShows: any = [];
ratingLimit = 8.5;
  constructor() { }
  
  ngOnInit(): void {
    // filters all shows by rating threshold assumed (ratingLimit:8.5)
    this.popularShows = this.allShows.filter((show:any) => show.rating.average > this.ratingLimit);
  }
}
