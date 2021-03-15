import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PopularShowsComponent } from './popular-shows.component';
import { TvShow } from '../models/shows';

describe('PopularShowsComponent', () => {
  let component: PopularShowsComponent;
  let fixture: ComponentFixture<PopularShowsComponent>;
  let tvShow = new TvShow;
        let allShows: Array<TvShow> = [];
        tvShow.id = 1;
        tvShow.name = 'Firefly';
        tvShow.genres = ['adventure'];
        tvShow.rating = {'average' : 9.5}
        allShows.push(tvShow)
        tvShow.id = 2;
        tvShow.name = 'Game of thrones';
        tvShow.genres = ['adventure'];        
        tvShow.rating = {'average' : 9.6}
        allShows.push(tvShow)
        
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PopularShowsComponent]
    });
    fixture = TestBed.createComponent(PopularShowsComponent);
    component = fixture.componentInstance;
    component.allShows = allShows;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`popularShows has default value`, () => {
    expect(component.popularShows).toEqual([]);
  });

  it(`ratingLimit has default value`, () => {
    expect(component.ratingLimit).toEqual(9);
  });

  it('makes expected calls', () => { 
    fixture.detectChanges();   
    component.ngOnInit();
    expect(component.popularShows).not.toEqual([]);
  });
});
