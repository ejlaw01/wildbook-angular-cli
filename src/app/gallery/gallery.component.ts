import { Component, OnInit, Input } from '@angular/core';
import { Encounter } from '../encounter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

  @Input() encounters: Encounter[];

}
