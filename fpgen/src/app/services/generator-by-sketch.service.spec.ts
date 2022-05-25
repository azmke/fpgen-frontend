import { TestBed } from '@angular/core/testing';

import { GeneratorBySketchService } from './generator-by-sketch.service';

describe('GeneratorBySketchService', () => {
  let service: GeneratorBySketchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorBySketchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
