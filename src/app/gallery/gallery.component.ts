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

  getHeight(i) {
    var height = (this.encounters[0].mediaAssets[i].annotation.height * this.ratio)+ "px";
    return height;
  }

  getWidth(i) {
    var width = (this.encounters[0].mediaAssets[i].annotation.width * this.ratio) + "px";
    return width;
  }

  getLeft(i){
    var left = (this.encounters[0].mediaAssets[i].annotation.x * this.ratio) + "px";
    return left;
  }

  getTop(i) {
    var top = (this.encounters[0].mediaAssets[i].annotation.y * this.ratio) + "px";
    return top;
  }

  constructor() { }

  ngOnInit() {

  }

}
