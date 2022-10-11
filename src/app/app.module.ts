import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, TableComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
