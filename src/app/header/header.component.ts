import { Component, OnInit } from '@angular/core';
import { TvShow } from '../models/shows';
import { CommonService } from './../services/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  allShows: Array<TvShow> = [];
  genreList : any = [];
  constructor(private commonService: CommonService, private router:Router) { }

  ngOnInit(): void {
    this.commonService.getShowsList().subscribe (shows => {
      this.allShows = shows;
      console.log('all shows', this.allShows);
      this.genreList = this.commonService.getGenreList(this.allShows);
      console.log('genre list:',this.genreList);
    });
  }  
  navigateToShow(searchShow: string) {
    console.log('search by value', searchShow);
    this.router.navigateByUrl('shows/'+searchShow+'');
  }
}
