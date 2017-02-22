import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IdentityComponent } from './identity/identity.component';
import { ContactComponent } from './contact/contact.component';
import { ObservationAttributesComponent } from './observation-attributes/observation-attributes.component';
import { DynamicPropertiesComponent } from './dynamic-properties/dynamic-properties.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { TrackingComponent } from './tracking/tracking.component';
import { BiologicalSamplesComponent } from './biological-samples/biological-samples.component';
import { MetadataComponent } from './metadata/metadata.component';
import { FooterComponent } from './footer/footer.component';
import { EnounterComponent } from './enounter/enounter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationComponent,
    NavComponent,
    GalleryComponent,
    IdentityComponent,
    ContactComponent,
    ObservationAttributesComponent,
    DynamicPropertiesComponent,
    MeasurementsComponent,
    TrackingComponent,
    BiologicalSamplesComponent,
    MetadataComponent,
    FooterComponent,
    EnounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA03hvhiLKIjryU6e_WpDCBvH0vrzrPe-I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
