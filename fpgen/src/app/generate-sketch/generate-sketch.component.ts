import { Component, OnInit } from '@angular/core';
import { I18nInterface } from 'ngx-image-drawing';

@Component({
  selector: 'app-generate-sketch',
  templateUrl: './generate-sketch.component.html',
  styleUrls: ['./generate-sketch.component.scss'],
})
export class GenerateSketchComponent implements OnInit {
  public locale: string = 'en';
  public width = 1000;
  public height = window.innerHeight - 600;

  public i18n: I18nInterface = {
    saveBtn: 'Generate Image from Sketch!',
    sizes: {
      extra: 'Extra',
    },
  };

  constructor() {
    this.locale = this.getNavigatorLanguage();
  }

  ngOnInit(): void {

  }
  public saveBtn($event: any) {
    // saveAs($event, 'image.jpg');
    //TODO: call backend server
  }

  private getNavigatorLanguage = () =>
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : (navigator as any).userLanguage ||
        navigator.language ||
        (navigator as any).browserLanguage ||
        'en';
}
