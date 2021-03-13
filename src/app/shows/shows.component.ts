import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/shows';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  searchedShows: Array<TvShow> = [];

  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log('search show value', param.searchShow)
      this.commonService.getShowSearch(param.searchShow).subscribe (shows => { 
        this.searchedShows = [];
        console.log('search result', shows);
        this.searchedShows = shows;
       });
      });
    }
}
