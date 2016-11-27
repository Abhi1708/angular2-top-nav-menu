import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent} from './app.component';
import {AppDropdown, AppDropdowncollapse} from './dropdown.component';
import {AppTopnav } from './topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDropdown,
    AppDropdowncollapse,
    AppTopnav,
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
