import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerateFormData } from '../types/generateFormData';

@Injectable({
  providedIn: 'root',
})
export class GeneratorByFormService {
  constructor(private readonly http: HttpClient) {}

  generateImage(formData: GenerateFormData) {
    // TODO: add server endpoint
    return this.http.post("endpoint", formData)
  };
}
