import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observation-attributes',
  templateUrl: './observation-attributes.component.html',
  styleUrls: ['./observation-attributes.component.scss']
})
export class ObservationAttributesComponent implements OnInit {

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
