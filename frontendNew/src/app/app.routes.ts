import { Routes } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';  // Auswertung der Geburtstage
import { HomeComponent } from './home/home.component';

// Definiere die Routen
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },  
  { path: 'another-page', pathMatch: 'full', component: AnotherPageComponent } 
];
