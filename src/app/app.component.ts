import { Component, OnInit } from '@angular/core';
import { Encounter, AnnotationParam, MiniMediaAsset } from './encounter';
import { EncounterService } from './encounter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EncounterService]
})

export class AppComponent implements OnInit {

  encounters: Encounter[];

  constructor(private encounterService: EncounterService) { }

  getEncounter(): void {
    this.encounterService.getEncounter().subscribe(encounter => this.encounters = encounter);
  }

  ngOnInit(): void {
    this.getEncounter();
  }

}
