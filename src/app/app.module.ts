import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationComponent,
    NavComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA03hvhiLKIjryU6e_WpDCBvH0vrzrPe-I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
