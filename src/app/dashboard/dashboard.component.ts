import { Component, OnInit } from '@angular/core';
import { TvShow } from '../models/shows';

import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allShows: Array<TvShow> = [];
  genreList : Array<string> = [];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getShowsList().subscribe (shows => {
      this.allShows = shows;
    });
  }

}
