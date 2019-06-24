import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NonExistingComponent } from './non-existing/non-existing.component';
import { HeaderComponent } from './shared/header/header.component';
import { ExportComponent } from './shared/export/export.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {CookieLawModule} from 'angular2-cookie-law';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Angular2CsvModule} from 'angular2-csv';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NonExistingComponent,
    HeaderComponent,
    ExportComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CookieLawModule,
    Angular2CsvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
