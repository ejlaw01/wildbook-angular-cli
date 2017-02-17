import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

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
