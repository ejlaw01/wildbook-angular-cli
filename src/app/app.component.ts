import { Component, OnInit } from '@angular/core';
import { Encounter, AnnotationParam, MiniMediaAsset } from './encounter';

import { EncounterService } from './encounter.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EncounterService]
})

export class AppComponent implements OnInit {

  encounters: Encounter[];
  ratio: number;

  constructor(private encounterService: EncounterService) { }

  getEncounter(): void {
    this.encounterService.getEncounter().subscribe(encounter => this.encounters = encounter);
  }

  getImageRatio(): void {
    this.encounterService.getEncounter().subscribe(
      encounter => {
        for (var i = 0; i < encounter[0].mediaAssets.length; i++) {
          var image = new Image;
          image.src = encounter[0].mediaAssets[i].imageURL;
          var ogWidth: number = image.naturalWidth;
          var currentWidth: number = document.getElementById(('gallery-image-' + [i])).clientWidth;
          var ratio = (currentWidth / ogWidth);
          console.log(ratio);
          this.ratio = ratio;
        }
      }
    );
  }


  ngOnInit(): void {
    // var self = this;
    this.getEncounter();
    this.getImageRatio();
    // window.onresize = function() {
    //   self.getImageRatio();
    // };
  }

}
