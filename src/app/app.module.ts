import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbIconModule, NbFormFieldModule, NbButtonModule, NbSelectModule, NbDatepickerModule, NbCardModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    NbButtonModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbCardModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
