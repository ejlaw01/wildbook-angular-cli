import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Encounter, AnnotationParam, MediaAsset } from './encounter';
import { ENCOUNTERS } from './mock-encounter';

// import 'rxjs/add/operator/toPromise';


@Injectable()
export class EncounterService {

  getEncounter(): Promise<Encounter[]> {
    let link: string = 'http://lev.cs.rpi.edu:8080/lewa3/api/org.ecocean.Encounter/';
    let encounterID: string = '49413784-83ca-4210-964b-ced9eed6f895';
    let apiLink: string = link + encounterID;

    this.http.request(apiLink).subscribe((res: Response) => {

      let encounterObject = res.json();

      console.log(res.json());

      let name: string = res.json().individualID;
      let imageURL: string = res.json().annotations[0].features[0].mediaAsset.url;
      var mediaAssets: MediaAsset[] = [];
      var annotation: AnnotationParam;

      for (var i = 0; i < encounterObject.annotations.length; i++) {
        debugger;
        imageURL = res.json().annotations[i].features[0].mediaAsset.url;
        annotation = encounterObject.annotations[i].features[0].parameters;
        mediaAssets[i] = new MediaAsset(imageURL, annotation);
      }

      let thisEncounter = new Encounter(name, mediaAssets);
      console.log(thisEncounter);
      ENCOUNTERS.push(thisEncounter);
    });

    return Promise.resolve(ENCOUNTERS);

  }

  constructor(private http: Http){
  }

}
