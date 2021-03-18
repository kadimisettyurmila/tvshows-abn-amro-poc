import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { OrderModule } from 'ngx-order-pipe';
import { ShowsComponent } from './shows.component';
import { OrderPipe } from "ngx-order-pipe";
import { of } from 'rxjs';

describe('ShowsComponent', () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;
  const showDetails = {'id': 1, 'name': 'Firefly',genres:['adventure'], 'rating':{'average':9.5}};
  const mockActivatedRoute = { 
    params: of({ searchShow: 'Firefly' }) 
  };

  beforeEach(async () => {
    const commonServiceStub = () => ({     
      getShowSearch(param: string) {        
         return of([{show:showDetails}]);
      }
    });
    await TestBed.configureTestingModule({
      declarations: [ ShowsComponent, OrderPipe ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CommonService, useFactory: commonServiceStub }, OrderModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
