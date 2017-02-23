import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  clicked: boolean = false;

  arrowClicked(event) {
    if (this.clicked === false) {
      this.clicked = true;
      event.target.classList.add('open-arrow');
    } else {
      this.clicked = false;
      event.target.classList.remove('open-arrow');
      event.target.classList.add('close-arrow');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
