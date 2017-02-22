import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Encounter } from './encounter';

const appRoutes: Routes = [
  {
    path: 'encounter',
    component: EncounterComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
