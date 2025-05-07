import { Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Startseite
import { AnotherPageComponent } from './another-page/another-page.component';  // Auswertung der Geburtstage

// Definiere die Routen
export const routes: Routes = [
  { path: '', component: AppComponent },  
  { path: 'another-page', component: AnotherPageComponent } 
];
