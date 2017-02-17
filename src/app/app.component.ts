import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  clicked: boolean = false;

  constructor(private encounterService: EncounterService) { }

  getEncounter(): void {
    this.encounterService.getEncounter().then(encounters => this.encounters = encounters);
  }

  ngOnInit(): void {
    this.getEncounter();
  }

  arrowClicked() {
    if (this.clicked == false) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }

}
