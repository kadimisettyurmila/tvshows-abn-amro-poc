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
  let allShows = {
    'id': 1, 'name': 'Firefly', genres: ['adventure'], 'rating': { 'average': 9.5 },
    '_embedded': { 'seasons': [{ 'number': 1, image: { 'medium': '' } }, { 'number': 2, image: { 'medium': '' } }] }
  };
  const commonServiceStub = () => ({     
    getSelectedShowInfo() {  
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
  it('should get selected show details', () => {
    expect(component.selectedShowDetails).toEqual(allShows);
  });
  it('selected show details should not be empty', () => {
    expect(component.selectedShowDetails).not.toEqual({});
  });
});
