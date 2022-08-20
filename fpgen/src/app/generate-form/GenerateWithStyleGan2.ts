import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GenerateFormData } from '../types/generateFormData';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss'],
})
export class GenerateWithStyleGan2 implements OnInit {
  checkoutForm = this.formBuilder.group(<GenerateFormData>{
    seed: '',
    truncation: '',
  });
  gpu: boolean = false;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public toggleGpuChange(event: any) {
    this.gpu = !this.gpu;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const data = this.checkoutForm.value;
    this.submit.emit({ data: { ...data, gpu: this.gpu }, type: 'stylegan' } );
  }
}
