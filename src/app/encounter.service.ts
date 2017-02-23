import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Encounter, AnnotationParam, MiniMediaAsset } from './encounter';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class EncounterService {

  private encounterURL: string = 'http://wb.scribble.com/api/org.ecocean.Encounter/5ea01c1c-b8bc-4053-88c0-5a5182b15624';

  constructor(private http: Http){  }

  getEncounter (): Observable<Encounter[]> {
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

    let name: string = encounterObject.individualID;
    let imageURL: string = encounterObject.annotations[0].features[0].mediaAsset.url;

    for (var i = 0; i < encounterObject.annotations.length; i++) {
      imageURL = encounterObject.annotations[i].features[0].mediaAsset.url;
      // if (!encounterObject.annotations[i].features[0].type || !encounterObject.annotations[i].features[0].parameters) {
      // } else {
      //   annotation = encounterObject.annotations[i].features[0].parameters;
      // }
      annotation = new AnnotationParam(488, 674, 1874, 761);
      mediaAssets[i] = new MiniMediaAsset(imageURL, annotation);
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


// getEncounter(): Promise<Encounter> {
//   let link: string = 'http://lev.cs.rpi.edu:8080/lewa3/api/org.ecocean.Encounter/';
//   let encounterID: string = '49413784-83ca-4210-964b-ced9eed6f895';
//   let apiLink: string = link + encounterID;
//
//   var encounterObject;
//   var thisEncounter: Encounter;
//
//   var self = this;
//
//   var request = new Promise(function(){
//    self.http.get(apiLink).map((res: Response) => {
//
//       debugger;
// var encounterObject = res.json();
//       console.log(encounterObject);
//
// var mediaAssets: MiniMediaAsset[] = [];
// var annotation: AnnotationParam;
//
// let name: string = encounterObject.individualID;
// let imageURL: string = encounterObject.annotations[0].features[0].mediaAsset.url;
//
// for (var i = 0; i < encounterObject.annotations.length; i++) {
//   imageURL = encounterObject.annotations[i].features[0].mediaAsset.url;
//   annotation = encounterObject.annotations[i].features[0].parameters;
//   mediaAssets[i] = new MiniMediaAsset(imageURL, annotation);
// }
//
// thisEncounter = new Encounter(name, mediaAssets);
//       console.log(thisEncounter);
//       return thisEncounter;
//     });
//   });
//
//   debugger;
//   return Promise.resolve(request);
// }
