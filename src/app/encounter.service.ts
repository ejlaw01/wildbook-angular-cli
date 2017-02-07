import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';



import { Encounter } from './encounter';
import { ENCOUNTERS } from './mock-encounter';

@Injectable()
export class EncounterService {

  getEncounter(): Promise<Encounter[]> {
    return Promise.resolve(ENCOUNTERS);
  }

  constructor(private http: Http){
    let link = 'http://lev.cs.rpi.edu:8080/lewa3/api/org.ecocean.Encounter/49413784-83ca-4210-964b-ced9eed6f895';
    let apiLink = link;

    this.http.request(apiLink).subscribe((res: Response) => {
      console.log(res.json());
    });
  }

}
