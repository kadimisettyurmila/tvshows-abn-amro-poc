import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/shows';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
 showlist = [];
 allShows :Array<TvShow> = [];
 selectedGenre = "";
 selectedGenreShows:Array<TvShow> = [];
 showsByGenre : Array<TvShow> = [];
  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService ) {     
    this.activatedRoute.params.subscribe((param) => {
      let selectedGenre = '';
      if(param.genre) {
        console.log('genre', param.genre);
        this.selectedGenre = selectedGenre = param.genre;

         this.commonService.getShowsList().subscribe((shows) => {
          console.log('all shows', shows);
          this.allShows = shows; 
          this.showsByGenre = this.getShowsByGenre(this.allShows, selectedGenre);
         } );
      }        
      console.log('shows by genre', this.showsByGenre);
    });
  }


  ngOnInit(): void { 
  }

  getShowsByGenre(allShows: Array<TvShow>, selectedGenre: string): Array<TvShow> {
    let selectedGenreShows = this.allShows.filter((show) => show.genres.includes(selectedGenre));
    console.log('selected genre shows', selectedGenreShows);
       return selectedGenreShows;   
     
  }

}
