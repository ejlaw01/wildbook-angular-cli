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
  @Input() selectedImageURL: string;

  isProcessing: boolean = true;

  isDetected: boolean = false;
  isNotDetected: boolean = false;

  detectionStatus() {
    //conditional statement goes here! see google doc titled 'Wildbook: IA musings" for reference.
  }

  isIdentified: boolean = false;
  isNotIdentified: boolean = false;

  identificationStatus() {
    //conditional statement goes here! see google doc titled 'Wildbook: IA musings" for reference.
  }

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

  getSecondaryHeight(i, j) {
    var height = (this.encounters[0].mediaAssets[i].secondaryAnnotations[j].height * this.ratio)+ "px";
    return height;
  }
  getSecondaryWidth(i, j) {
    var width = (this.encounters[0].mediaAssets[i].secondaryAnnotations[j].width * this.ratio) + "px";
    return width;
  }
  getSecondaryLeft(i, j){
    var left = (this.encounters[0].mediaAssets[i].secondaryAnnotations[j].x * this.ratio) + "px";
    return left;
  }
  getSecondaryTop(i, j) {
    var top = (this.encounters[0].mediaAssets[i].secondaryAnnotations[j].y * this.ratio) + "px";
    return top;
  }

  selectImage(i) {
    var mediaAssets = this.encounters[0].mediaAssets;
    for (var j = 0; j < mediaAssets.length; j++) {
      mediaAssets[j].isSelected = false;
    }
    this.selectedImageURL = mediaAssets[i].imageURL;
    mediaAssets[i].isSelected = true;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
