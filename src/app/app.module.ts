import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent} from './app.component';
import {NgbDropdown, NgbDropdownTogglee} from './dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NgbDropdown,
    NgbDropdownTogglee
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
