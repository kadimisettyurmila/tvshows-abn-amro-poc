import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonService } from './../services/common.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { TvShow } from '../models/shows';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
      class commonServiceStub {     
        getShowsList() {
          let tvShow = new TvShow;
          let allShows = [];
          tvShow.id = 1;
          tvShow.name = 'Firefly';
          tvShow.genres = ['adventure'];
          allShows.push(tvShow)
          tvShow.id = 2;
          tvShow.name = 'Game of thrones';
          tvShow.genres = ['adventure'];
          allShows.push(tvShow)
           return of(allShows);
        }
      
      getGenreList(allShows: any) { return ['adventure']}
    }
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
      providers: [{ provide: CommonService, useClass: commonServiceStub }]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`allShows has default value`, () => {
    fixture.detectChanges();
    expect(component.allShows).not.toEqual([]);
  });

  it(`genreList has default value`, () => {
    expect(component.genreList).toEqual([]);
  });
    it('makes expected calls', () => {
      component.ngOnInit();      
    expect(component.allShows).not.toEqual([]);
    expect(component.genreList).not.toEqual([]);
    });
  
});
