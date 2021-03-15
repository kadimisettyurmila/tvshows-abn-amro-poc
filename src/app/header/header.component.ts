import { Component, OnInit } from '@angular/core';
import { TvShow } from '../models/shows';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  allShows: Array<TvShow> = [];
  genreList : any = [];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getShowsList().subscribe (shows => {
      this.allShows = shows;
      console.log('all shows', this.allShows);
      this.genreList = this.commonService.getGenreList(this.allShows);
      console.log('genre list:',this.genreList);
    });
  }  
}
