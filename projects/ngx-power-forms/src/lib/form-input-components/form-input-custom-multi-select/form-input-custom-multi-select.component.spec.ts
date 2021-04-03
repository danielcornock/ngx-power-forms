import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputCustomMultiSelectComponent } from './form-input-custom-multi-select.component';

describe('FormInputCustomMultiSelectComponent', () => {
  let component: FormInputCustomMultiSelectComponent;
  let fixture: ComponentFixture<FormInputCustomMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputCustomMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputCustomMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
