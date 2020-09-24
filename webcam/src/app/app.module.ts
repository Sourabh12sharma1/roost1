import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ContentService } from './services/content.service';
import { AppConstants } from './app.constants';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebcamModule,
    HttpClientModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    HttpClient,
    AppConstants,
    ContentService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
