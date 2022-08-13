import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateWithStyleGan2 } from './generate-form/GenerateWithStyleGan2';
import { GenerateSketchComponent } from './generate-sketch/generate-sketch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { GenerateWithPgganComponent } from './generate-with-pggan/generate-with-pggan.component';
import { GenerateWithStyleGanComponent } from './generate-with-style-gan/generate-with-style-gan.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateWithStyleGan2,
    GenerateSketchComponent,
    GenerateWithPgganComponent,
    GenerateWithStyleGanComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    ImageDrawingModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
