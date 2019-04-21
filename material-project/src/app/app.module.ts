import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {DataService} from './data/data.service';
import {AuthService} from './auth.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],

  entryComponents: [
    PostDialogComponent
  ],
  
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
