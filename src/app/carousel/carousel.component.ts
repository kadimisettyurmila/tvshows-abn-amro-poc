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
  screenWidth: any;
  screenHeight: any;
  constructor() { }

  ngOnInit(): void {
  this.checkResolution(window); 

  // code to show 3 slides for non mobile resolutions
this.showsToSlideFormatted = [];
var j = -1;

for (var i = 0; i < this.showsToSlide.length; i++) {
    if (i % 3 == 0) {
        j++;
        this.showsToSlideFormatted[j] = [];
        this.showsToSlideFormatted[j].push(this.showsToSlide[i]);
    }
    else {
        this.showsToSlideFormatted[j].push(this.showsToSlide[i]);
    }
}
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
}
