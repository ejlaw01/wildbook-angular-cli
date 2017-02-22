import { Component, OnInit, Input } from '@angular/core';
import { Encounter } from '../encounter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  @Input() encounters: Encounter[];
  @Input() ratio: number;

  getHeight() {
    var height = (this.encounters[0].mediaAssets[0].annotation.height * this.ratio)+ "px";
    return height;
  }

  getWidth() {
    var width = (this.encounters[0].mediaAssets[0].annotation.width * this.ratio) + "px";
    return width;
  }

  getLeft(){
    var left = (this.encounters[0].mediaAssets[0].annotation.x * this.ratio) + "px";
    return left;
  }

  getTop() {
    var top = (this.encounters[0].mediaAssets[0].annotation.y * this.ratio) + "px";
    return top;
  }

  constructor() { }

  ngOnInit() {

  }

}
