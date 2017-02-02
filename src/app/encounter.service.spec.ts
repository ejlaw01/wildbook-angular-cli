/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EncounterService } from './encounter.service';

describe('EncounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncounterService]
    });
  });

  it('should ...', inject([EncounterService], (service: EncounterService) => {
    expect(service).toBeTruthy();
  }));
});
