import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonService } from './../services/common.service';
import { DashboardComponent } from './dashboard.component';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let allShows = [{'id': 1, 'name': 'Firefly',genres:['adventure']}, {'id':2,'name':'Game of thrones', genres:['action','adventure']}];
  const commonServiceStub = () => ({     
    getShowsList() {
      
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
      expect(component.allShows.length).toEqual(2);
    });
  });
});
