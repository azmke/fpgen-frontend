import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GeneratorByFormService } from '../services/generator-by-form.service';
import { GenerateFormData } from '../types/generateFormData';

@Component({
  selector: 'app-generate-with-style-gan',
  templateUrl: './generate-with-style-gan.component.html',
  styleUrls: ['./generate-with-style-gan.component.scss'],
})
export class GenerateWithStyleGanComponent implements OnInit {
  checkoutForm = this.formBuilder.group(<GenerateFormData>{
    seed: '',
  });
  gpu: boolean = false;

  constructor(
    private generatorByFormService: GeneratorByFormService,
    private formBuilder: FormBuilder
  ) {}

  public toggleGpuChange(event: any) {
    this.gpu = !this.gpu;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const data = this.checkoutForm.value;
    this.generatorByFormService.generateImage(data).subscribe((response) => {
      //TODO: render image
    });
  }
}
