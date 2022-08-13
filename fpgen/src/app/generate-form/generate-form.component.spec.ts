import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWithStyleGan2 } from './GenerateWithStyleGan2';

describe('GenerateFormComponent', () => {
  let component: GenerateWithStyleGan2;
  let fixture: ComponentFixture<GenerateWithStyleGan2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateWithStyleGan2],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateWithStyleGan2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
