import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Encounter, AnnotationParam, MiniMediaAsset } from './encounter';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class EncounterService {

  private encounterURL: string = 'http://lev.cs.rpi.edu:8080/lewa3/api/org.ecocean.Encounter/49413784-83ca-4210-964b-ced9eed6f895';

  constructor(private http: Http){  }

  getEncounter(): Observable<Encounter[]> {
    return this.http.get(this.encounterURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let encounterObject = res.json();
    console.log(encounterObject);
    var thisEncounter: Encounter;
    var mediaAssets: MiniMediaAsset[] = [];
    var annotation: AnnotationParam;
    var secondaryAnnotations: AnnotationParam[];

    let name: string = encounterObject.individualID;
    let imageURL: string = encounterObject.annotations[0].features[0].mediaAsset.url;

    for (var i = 0; i < encounterObject.annotations.length; i++) {
      imageURL = encounterObject.annotations[i].features[0].mediaAsset.url;
      var secondaryAnnotations: AnnotationParam[] = [];
      if (!encounterObject.annotations[i].features[0].type || !encounterObject.annotations[i].features[0].parameters) {
        console.log("No annotation parameters supplied!");
        var annotation = new AnnotationParam("none", 0, 0, 0, 0);
      } else {
        var id = encounterObject.annotations[i].id;
        var height = encounterObject.annotations[i].features[0].parameters.height;
        var width = encounterObject.annotations[i].features[0].parameters.width;
        var x = encounterObject.annotations[i].features[0].parameters.x;
        var y = encounterObject.annotations[i].features[0].parameters.y;
        var annotation = new AnnotationParam(id, height, width, x, y);
        for (var j = 0; j < encounterObject.annotations[i].features[0].mediaAsset.features.length; j++) {
          var secondaryId = encounterObject.annotations[i].features[0].mediaAsset.features[j].id;
          var secondaryHeight = encounterObject.annotations[i].features[0].mediaAsset.features[j].parameters.height;
          var secondaryWidth = encounterObject.annotations[i].features[0].mediaAsset.features[j].parameters.width;
          var secondaryX = encounterObject.annotations[i].features[0].mediaAsset.features[j].parameters.x;
          var secondaryY = encounterObject.annotations[i].features[0].mediaAsset.features[j].parameters.y;
          secondaryAnnotations[j] = new AnnotationParam(secondaryId, secondaryHeight, secondaryWidth, secondaryX, secondaryY);
        }
      }
      mediaAssets[i] = new MiniMediaAsset(imageURL, annotation, secondaryAnnotations);
    }

    thisEncounter = new Encounter(name, mediaAssets);
    console.log(thisEncounter);
    return [thisEncounter || {}];
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const encounterObject = error.json() || '';
      const err = encounterObject.error || JSON.stringify(encounterObject);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
