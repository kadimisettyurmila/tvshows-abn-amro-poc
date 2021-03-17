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
  let allShows = [{'id': 1, 'name': 'Firefly',genres:['adventure']},
   {'id':2,'name':'Game of thrones', genres:['action','adventure']}];
  beforeEach(() => {
      class commonServiceStub {     
        getShowsList() {          
           return of(allShows);
        }
      
      getGenreList(allShows: any) { return ['action','adventure']}
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
    expect(component.allShows[0].id).toEqual(1);
    expect(component.allShows[1].id).toEqual(2);
    expect(component.allShows[0].name).toEqual('Firefly');
    expect(component.allShows[1].name).toEqual('Game of thrones');
    expect(component.genreList).toEqual(['action','adventure']);
    });
  
});
