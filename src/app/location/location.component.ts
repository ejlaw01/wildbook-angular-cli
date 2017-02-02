import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  lat: number = 37.3;
  lng: number = -6.4;
  zoom: number = 6;

  constructor() { }

  ngOnInit() {
  }

}
