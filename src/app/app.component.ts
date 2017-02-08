import { Component, OnInit } from '@angular/core';
import { Encounter } from './encounter';
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
    this.encounterService.getEncounter().then(encounters => this.encounters = encounters);
  }

  ngOnInit(): void {
    this.getEncounter();
  }

}
