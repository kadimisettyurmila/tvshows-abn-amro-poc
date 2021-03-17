import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../models/shows';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  selectedShowId = 0;
  selectedShowDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) { 
    this.selectedShowId = parseInt(this.activatedRoute.snapshot.params.showId, 10); 
  this.commonService.getSelectedShowInfo(this.selectedShowId).subscribe (show => {
    console.log('selected show', show);
    this.selectedShowDetails = show;
  });
   }

  ngOnInit(): void {
  }

}
