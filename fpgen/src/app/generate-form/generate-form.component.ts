import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GeneratorByFormService } from '../services/generator-by-form.service';
import { GenerateFormData } from '../types/generateFormData';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss'],
})
export class GenerateFormComponent implements OnInit {
  checkoutForm = this.formBuilder.group(<GenerateFormData>{
    seed: '',
    truncation: '',
  });

  constructor(
    private generatorByFormService: GeneratorByFormService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const data = this.checkoutForm.value;
    this.generatorByFormService.generateImage(data).subscribe((response) => {
      //TODO: render image
    })
  }
}
