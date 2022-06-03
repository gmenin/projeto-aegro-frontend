import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FarmListComponent } from './farm/farm-list/farm-list.component';
import { AddFarmModalComponent } from './farm/add-farm-modal/add-farm-modal.component';
import { DeleteFarmModalComponent } from './farm/delete-farm-modal/delete-farm-modal.component';
import { GlebeListComponent } from './glebe/glebe-list/glebe-list.component';
import { AddGlebeModalComponent } from './glebe/add-glebe-modal/add-glebe-modal.component';
import { DeleteGlebeModalComponent } from './glebe/delete-glebe-modal/delete-glebe-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent,
    AddFarmModalComponent,
    DeleteFarmModalComponent,
    GlebeListComponent,
    AddGlebeModalComponent,
    DeleteGlebeModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
