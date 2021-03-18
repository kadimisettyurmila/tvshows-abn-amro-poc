import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  selectedShowId = 0;
  selectedShowDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private commonService: CommonService) {
    this.selectedShowId = parseInt(this.activatedRoute.snapshot.params.showId, 10);
    this.commonService.getSelectedShowInfo(this.selectedShowId).subscribe(show => {
      this.selectedShowDetails = show;
    });
  }
}
