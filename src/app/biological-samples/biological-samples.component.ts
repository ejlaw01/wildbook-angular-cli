import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biological-samples',
  templateUrl: './biological-samples.component.html',
  styleUrls: ['./biological-samples.component.scss']
})
export class BiologicalSamplesComponent implements OnInit {

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
