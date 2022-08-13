import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWithStyleGanComponent } from './generate-with-style-gan.component';

describe('GenerateWithStyleGanComponent', () => {
  let component: GenerateWithStyleGanComponent;
  let fixture: ComponentFixture<GenerateWithStyleGanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateWithStyleGanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateWithStyleGanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
