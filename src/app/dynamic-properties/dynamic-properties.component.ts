import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-properties',
  templateUrl: './dynamic-properties.component.html',
  styleUrls: ['./dynamic-properties.component.scss']
})
export class DynamicPropertiesComponent implements OnInit {

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
