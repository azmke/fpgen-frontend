import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateWithStyleGan2 } from './generate-form/GenerateWithStyleGan2';
import { GenerateSketchComponent } from './generate-sketch/generate-sketch.component';
import { GenerateWithPgganComponent } from './generate-with-pggan/generate-with-pggan.component';
import { GenerateWithStyleGanComponent } from './generate-with-style-gan/generate-with-style-gan.component';

const routes: Routes = [
  { path: 'generate-with-pggan', component: GenerateWithPgganComponent },
  { path: 'generate-with-stylegan', component: GenerateWithStyleGanComponent },
  { path: 'generate-with-stylegan2', component: GenerateWithStyleGanComponent },
  { path: 'generate-with-pix2pix', component: GenerateSketchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
