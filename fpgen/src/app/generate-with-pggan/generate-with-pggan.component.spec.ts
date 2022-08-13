import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWithPgganComponent } from './generate-with-pggan.component';

describe('GenerateWithPgganComponent', () => {
  let component: GenerateWithPgganComponent;
  let fixture: ComponentFixture<GenerateWithPgganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateWithPgganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateWithPgganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
