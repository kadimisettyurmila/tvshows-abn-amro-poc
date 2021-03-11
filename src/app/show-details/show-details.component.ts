import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/shows';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  selectedShowId = 0;
  allShows: Array<TvShow> = [];
  selectedShowDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) {  
  this.commonService.getShowsList().subscribe (shows => {
    console.log('total show list', shows);
    this.allShows = shows;
    this.selectedShowId = parseInt(this.activatedRoute.snapshot.params.showId, 10);
    this.selectedShowDetails = this.getShowDetails(this.allShows, this.selectedShowId);
  });
   }

  ngOnInit(): void {
  }

  /* Get show details of selected movie
    @params 
        allshows: total show list
        showId: selected show id
    @returns 
        selected show
  */
  getShowDetails(allShows: Array<TvShow>, showId:Number): TvShow {
    let selectedShow = allShows.filter(show => show.id === showId);
    console.log('selected show', selectedShow);
    if(selectedShow.length > 0)
    return selectedShow[0];
    return new TvShow;
  }

}
