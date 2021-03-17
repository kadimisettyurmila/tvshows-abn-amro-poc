import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { GenresComponent } from './genres.component';
import { OrderPipe } from "ngx-order-pipe";
import { of } from 'rxjs';
import { TvShow } from '../models/shows';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;
  const mockActivatedRoute = { 
    params: of({ genre: 'adventure' }) 
  };

  beforeEach(() => {
    class commonServiceStub {
      getShowsList() {
        let allShows = [{'id': 1, 'name': 'Firefly',genres:['adventure']}, {'id':2,'name':'Game of thrones', genres:['action','adventure']}];
         return of(allShows);
      }
    }
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [GenresComponent, OrderPipe],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CommonService, useClass: commonServiceStub }
      ]
    });
   // spyOn(GenresComponent.prototype, 'getShowsByGenre');
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`showlist has default value`, () => {
    expect(component.showlist).toEqual([]);
  });

  it(`allShows has default value`, () => {
    expect(component.allShows).not.toEqual([]);
  });
 
  it(`selectedGenreShows has default value`, () => {
    expect(component.selectedGenreShows).toEqual([]);
  });

  it(`showsByGenre has default value`, () => {
    expect(component.showsByGenre).not.toEqual([]);
  });
});
