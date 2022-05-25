import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import { GenerateSketchComponent } from './generate-sketch/generate-sketch.component';

const routes: Routes = [
  { path: 'generate-with-form', component: GenerateFormComponent },
  { path: 'generate-with-sketch', component: GenerateSketchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
