import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerateFormData, ModelType } from '../types/generateFormData';

@Injectable({
  providedIn: 'root',
})
export class GeneratorByFormService {
  api = 'http://localhost:5000';
  constructor(private readonly http: HttpClient) {}

  generateImage(data: GenerateFormData, modelType: ModelType, image?: Blob) {
    if (image) {
      const formData = new FormData();
      formData.append('minutiaemap', image);
      formData.append('data', JSON.stringify(data));

      return this.http.post(`${this.api}/pix2pix/generate`, formData, {
        responseType: 'blob',
      });
    }

    else {
      // TODO: add server endpoint
      // return this.http.post(`http://localhost:5000/${modelType}/generate`, data);
      return this.http.get(`${this.api}/dummy`, {
        responseType: 'blob',
      });
    }

  }
}
