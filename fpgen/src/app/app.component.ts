import { Component } from '@angular/core';
import { GeneratorByFormService } from './services/generator-by-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fpgen';
  selected = '';
  imageBlobUrl: string = '';

  constructor(private generatorByFormService: GeneratorByFormService) {}
  submit(body: any) {
    this.generatorByFormService
      .generateImage(body.data, body.type, body.image)
      .subscribe((response) => {
        this.createImageFromBlob(response);
      });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageBlobUrl = reader.result as string;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
