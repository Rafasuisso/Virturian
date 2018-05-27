import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule}from 'angularfire2';
import {AngularFireDatabaseModule}from 'angularfire2/database';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {environment}from'../environments/environment';
import { MotoresComponent } from './motores/motores.component';
import { MotorComponent } from './motores/motor/motor.component';
import { MotorListComponent } from './motores/motor-list/motor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MotoresComponent,
    MotorComponent,
    MotorListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
