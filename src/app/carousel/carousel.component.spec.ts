import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let shows = [{'id': 1, 'name': 'Game of thrones'}, {'id': 2, 'name': 'Firefly'}]
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CarouselComponent]
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.showsToSlide = shows;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
   it('can load instance', () => {
    component.ngOnInit();
    expect(component.showsToSlideFormatted).not.toEqual([]);
  });
});
