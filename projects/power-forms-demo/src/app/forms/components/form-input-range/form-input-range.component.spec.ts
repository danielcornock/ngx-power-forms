import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputRangeComponent } from './form-input-range.component';

describe('FormInputRangeComponent', () => {
  let component: FormInputRangeComponent;
  let fixture: ComponentFixture<FormInputRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
