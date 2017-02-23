import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observation-attributes',
  templateUrl: './observation-attributes.component.html',
  styleUrls: ['./observation-attributes.component.scss']
})
export class ObservationAttributesComponent implements OnInit {

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
