import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  clicked: boolean = true;

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

  lat: number = 37.3;
  lng: number = -6.4;
  zoom: number = 6;

  constructor() { }

  ngOnInit() {
  }

}
