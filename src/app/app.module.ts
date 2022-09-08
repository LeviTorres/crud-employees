import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsEmployeesComponent } from './components/details-employees/details-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeesComponent,
    ListEmployeesComponent,
    DetailsEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
