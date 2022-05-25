import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSketchComponent } from './generate-sketch.component';

describe('GenerateSketchComponent', () => {
  let component: GenerateSketchComponent;
  let fixture: ComponentFixture<GenerateSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSketchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
