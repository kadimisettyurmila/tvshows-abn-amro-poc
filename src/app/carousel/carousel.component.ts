import { Component, OnInit, Input, HostListener  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 @Input() showsToSlide: any;
 showsToSlideFormatted: any;
 mobile = false;
 // number of shows per slide 
 static noOfShowsPerSlide = 3;
  screenWidth: any;
  screenHeight: any;
  constructor() { }

  ngOnInit(): void {
  this.checkResolution(window); 

  
this.showsToSlideFormatted = [];
this.showsToSlideFormatted = this.getShowsToSlide(this.showsToSlide);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkResolution(event.target);
   
  }
  // Listens to the events and detects resolution to decide number of slides to show
  checkResolution(event:any){
    this.screenWidth = event.innerWidth;
    this.screenHeight = event.innerHeight;
    if (this.screenWidth <= 600) { // 768px portrait
      this.mobile = true;    
    }
    else 
    this.mobile = false;
  }

  // code to show 3 slides in carousel for non mobile resolutions
  getShowsToSlide(popularShows:any){
    var j = -1;
    for (var i = 0; i < this.showsToSlide.length; i++) {
        if (i % CarouselComponent.noOfShowsPerSlide == 0) {
            j++;
            this.showsToSlideFormatted[j] = [];
            this.showsToSlideFormatted[j].push(this.showsToSlide[i]);
        }
        else {
            this.showsToSlideFormatted[j].push(this.showsToSlide[i]);
        }
    }
    return this.showsToSlideFormatted;
  }
}
