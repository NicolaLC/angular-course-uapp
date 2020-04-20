import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityFilterComponent } from './university-filter/university-filter.component';
import { UniversityTableComponent } from './university-table/university-table.component';
@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent,
    UniversityFilterComponent,
    UniversityTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
