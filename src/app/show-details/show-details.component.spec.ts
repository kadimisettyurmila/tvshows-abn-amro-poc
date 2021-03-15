import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailsComponent } from './show-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TvShow } from '../models/shows';
import { CommonService } from '../services/common.service';
import { filter } from 'rxjs/operators';


describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;
  const commonServiceStub = () => ({     
    getShowsList() {
      let tvShow = new TvShow;
      let allShows = [];
      tvShow.id = 1;
      tvShow.name = 'Firefly'
      allShows.push({show :tvShow});
      tvShow.id = 2;
      tvShow.name = 'Game of thrones'
      allShows.push({show:tvShow});
       return of(allShows);
    }
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailsComponent ],
      providers: [{ provide: ActivatedRoute, useValue: {
        snapshot: { params: { showId: '1' } }
      } },
        { provide: CommonService, useFactory: commonServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
