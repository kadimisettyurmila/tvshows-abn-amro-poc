import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PopularShowsComponent } from './popular-shows.component';
import { TvShow } from '../models/shows';

describe('PopularShowsComponent', () => {
  let component: PopularShowsComponent;
  let fixture: ComponentFixture<PopularShowsComponent>;
  let allShows = [{'id': 1, 'name': 'Firefly',genres:['adventure'], 'rating':{'average':8}}, 
  {'id':2,'name':'Game of thrones', genres:['action','adventure'], 'rating':{'average':9.6}}];
        
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
    expect(component.ratingLimit).toEqual(8.5);
  });

  it('makes expected calls', () => { 
    fixture.detectChanges();   
    component.ngOnInit();
    expect(component.popularShows.length).toEqual(1);
  });
});
