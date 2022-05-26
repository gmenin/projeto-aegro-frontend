import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FarmListComponent } from './farm/farm-list/farm-list.component';
import { AddFarmModalComponent } from './farm/add-farm-modal/add-farm-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent,
    AddFarmModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
