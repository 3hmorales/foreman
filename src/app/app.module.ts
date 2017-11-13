import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import { AppComponent } from './app.component';
UIkit.use(Icons);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
