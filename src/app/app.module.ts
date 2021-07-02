import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './@core/core.module';
// JQuery Import
import * as $ from 'jquery';
import { ThemeModule } from './@theme/theme.module';
import { NbToastrModule, NbDialogModule, NbTooltipModule } from '@nebular/theme';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbToastrModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbTooltipModule,
    NbDialogModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
