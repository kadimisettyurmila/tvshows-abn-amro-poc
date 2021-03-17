import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { CommonService } from './common.service';
import { TvShow } from '../models/shows';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService]
    });
    service = TestBed.inject(CommonService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getShowsList', () => {
    let show = new TvShow;
      let allShows: Array<TvShow> = [];
      show.id = 1;
      show.name = 'Firefly';
      show.genres = ['adventure'];
      allShows.push(show);
      show.id = 2;
      show.name = 'Game of thrones';
      show.genres = ['action','adventure'];
      allShows.push(show);
    it('makes expected calls', () => {
      spyOn(service, 'getShowsList').and.returnValue(of(allShows));
      service.getShowsList().subscribe(res => {
        expect(res).toEqual(allShows);
      });      
    });
    it('shows genre list', () => {
      let genres: Array<string> = service.getGenreList(allShows); 
      expect(genres).toEqual(['action', 'adventure']);    
    });
  });

});

