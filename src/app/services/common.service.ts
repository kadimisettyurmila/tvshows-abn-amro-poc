import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TvShow } from '../models/shows'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) {
  }
  // Fetch total movies list from API
  getShowsList():Observable<Array<TvShow>> {
   return this.http.get<Array<TvShow>>(`${environment.apiUrl}`);
  }
  // Fetch select movie information along with seasons
  getSelectedShowInfo(showID: number):Observable<TvShow> {
    return this.http.get<TvShow>(`${environment.apiUrl}`+'/'+showID+'?embed[]=seasons');
   }
  /* Fetch shows by search value
   @params searchShowName : show name to search
   @returns shows by search value
  */
  getShowSearch(searchShowName: string):Observable<Array<{show:TvShow}>> {
    return this.http.get<Array<{show: TvShow}>>(`${environment.searchShowsApi}`+'?q='+searchShowName);
  }
  /*
  Fetches movies by genre 
   @param allShows: list of all Tv shows
   @returns movies of selected genre
  */
  getGenreList(allShows: Array<TvShow>): string[]{
    let allGenres : Array<string> = [];
    allShows.forEach((show: TvShow) => {
    
     if(show.genres) {
      allGenres = [...allGenres, ...show.genres];     
     }
   });    
   return Array.from(new Set(allGenres));
  }
}
