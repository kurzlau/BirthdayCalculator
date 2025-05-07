import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Import RouterModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])  // Ensure RouterModule is imported here with the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
