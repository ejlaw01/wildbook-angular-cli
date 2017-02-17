import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  clicked: boolean = false;

  arrowClicked() {
    if (this.clicked == false) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
