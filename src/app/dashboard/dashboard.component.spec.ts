import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonService } from './../services/common.service';
import { DashboardComponent } from './dashboard.component';
import { TvShow } from '../models/shows';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const commonServiceStub = () => ({     
    getShowsList() {
      let tvShow = new TvShow;
      let allShows = [];
      tvShow.id = 1;
      tvShow.name = 'Firefly';
      tvShow.genres = ['adventure'];
      allShows.push(tvShow)
      tvShow.id = 2;
      tvShow.name = 'Game of thrones'
      tvShow.genres = ['adventure'];
      allShows.push(tvShow)
       return of(allShows);
    }
  });
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [{ provide: CommonService, useFactory: commonServiceStub }]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`allShows has default value`, () => {
    expect(component.allShows).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {    
      component.ngOnInit();
      expect(component.allShows).not.toEqual([]);
    });
  });
});
