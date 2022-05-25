import { TestBed } from '@angular/core/testing';

import { GeneratorByFormService } from './generator-by-form.service';

describe('GeneratorByFormService', () => {
  let service: GeneratorByFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorByFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
