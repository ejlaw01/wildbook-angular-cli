import { Injectable } from '@angular/core';

import { Encounter } from './encounter';
import { ENCOUNTERS } from './mock-encounter';

@Injectable()
export class EncounterService {

  getEncounter(): Promise<Encounter[]> {
    return Promise.resolve(ENCOUNTERS);
  }

  constructor() { }

}
