import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Encounter, AnnotationParam, MiniMediaAsset, MediaAsset, Annotation, Feature, MediaAssetFeature, Store, Metadata } from './encounter';

 import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { ENCOUNTER } from './mock-encounter';
// import 'rxjs/add/operator/toPromise';


@Injectable()
export class EncounterService {

  getEncounter(): Observable<Encounter[]> {
    let link: string = 'http://lev.cs.rpi.edu:8080/lewa3/api/org.ecocean.Encounter/';
    let encounterID: string = '49413784-83ca-4210-964b-ced9eed6f895';
    let apiLink: string = link + encounterID;

return this.http.get(apiLink).map(this.extractData).catch(this.handleError);

/*

    var encounterObject;
    var thisEncounter: Encounter;

    var self = this;

    var request = new Promise(function(){
      self.http.get(apiLink).subscribe((res: Response) => {

        //debugger;
        var encounterObject = res.json();
        console.log(encounterObject);

        var mediaAssets: MiniMediaAsset[] = [];
        var annotation: AnnotationParam;

        let name: string = encounterObject.individualID;
        let imageURL: string = encounterObject.annotations[0].features[0].mediaAsset.url;

        for (var i = 0; i < encounterObject.annotations.length; i++) {
          imageURL = encounterObject.annotations[i].features[0].mediaAsset.url;
          annotation = encounterObject.annotations[i].features[0].parameters;
          mediaAssets[i] = new MiniMediaAsset(imageURL, annotation);
        }

        thisEncounter = new Encounter(name, mediaAssets);
        console.log('thisEncounter -> %o', thisEncounter);
        return thisEncounter;
      });
    });

    debugger;
    return Promise.resolve(request);
*/

  }

private extractData(res: Response) {
  let body = res.json();
console.info('extractData() body --> %o', body);
  return [body || { }];
}
  constructor(private http: Http){  }


 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

    // var request = new Promise(function(){
    //
    //   this.http.get(apiLink).subscribe((res: Response) => {
    //   var encounterObject = res.json();
    //   let name: string = encounterObject.individualID;
    //   let imageURL: string = encounterObject.annotations[0].features[0].mediaAsset.url;
    //   var mediaAssets: MediaAsset[] = [];
    //   var annotation: AnnotationParam;
    //   for (var i = 0; i < encounterObject.annotations.length; i++) {
    //     imageURL = encounterObject.annotations[i].features[0].mediaAsset.url;
    //     annotation = encounterObject.annotations[i].features[0].parameters;
    //     mediaAssets[i] = new MediaAsset(imageURL, annotation);
    //   }
    //
    //   thisEncounter = new Encounter(name, mediaAssets);
    //   console.log(thisEncounter);
    //   return thisEncounter;
    //   });
    // });


  // getEncounter() {
  //  return this.http.get("http://lev.cs.rpi.edu:8080/lewa3/api/org.ecocean.Encounter/49413784-83ca-4210-964b-ced9eed6f895").map((res:Response) => res.json());
  // }



  // formatEncounter(encounterObject): Promise<Encounter> {
  //   var thisEncounter: Encounter;
  //   var mediaAssets: MiniMediaAsset[] = [];
  //   var annotation: AnnotationParam;
  //
  //   let name: string = encounterObject.individualID;
  //   let imageURL: string = encounterObject.annotations[0].features[0].mediaAsset.url;
  //   for (var i = 0; i < encounterObject.annotations.length; i++) {
  //     imageURL = encounterObject.annotations[i].features[0].mediaAsset.url;
  //     annotation = encounterObject.annotations[i].features[0].parameters;
  //     mediaAssets[i] = new MiniMediaAsset(imageURL, annotation);
  //   }
  //
  //   thisEncounter = new Encounter(name, mediaAssets);
  //   console.log(thisEncounter);
  //
  //   return Promise.resolve(thisEncounter);
  // }

