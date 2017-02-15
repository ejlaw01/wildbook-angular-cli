import { Component, OnInit } from '@angular/core';
import { Encounter, MediaAsset, AnnotationParam, MiniMediaAsset } from './encounter';
import { EncounterService } from './encounter.service';
// import { Headers, Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EncounterService]
})

export class AppComponent implements OnInit {

  encounter: Encounter[];

  constructor(private encounterService: EncounterService) { }

  getEncounter(): void {
	this.encounterService.getEncounter().subscribe(
		encounter => this.encounter = encounter
	);
  }

  ngOnInit(): void {
    this.getEncounter();
  }

}
