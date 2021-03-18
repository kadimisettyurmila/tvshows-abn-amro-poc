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
  searchedShows: Array<{ show: TvShow }> = [];

  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.commonService.getShowSearch(param.searchShow).subscribe(shows => {
        this.searchedShows = [];
        this.searchedShows = shows;
        this.searchedShows.forEach(show => {
          if (show.show.rating.average == null) {
            show.show.rating.average = 0;
          }
        });
      });
    });
  }
}
