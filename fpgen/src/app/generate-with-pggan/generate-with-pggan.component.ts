import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GeneratorByFormService } from '../services/generator-by-form.service';
import { GenerateFormData } from '../types/generateFormData';

@Component({
  selector: 'app-generate-with-pggan',
  templateUrl: './generate-with-pggan.component.html',
  styleUrls: ['./generate-with-pggan.component.scss'],
})
export class GenerateWithPgganComponent implements OnInit {
  checkoutForm = this.formBuilder.group(<GenerateFormData>{
    seed: '',
  });
  gpu: boolean = false;
  @Output() submit: EventEmitter<any> = new EventEmitter();

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
     this.submit.emit({ data: { ...data, gpu: this.gpu }, type: 'pggan' });

  }
}
