import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputMultiSelectComponent } from './form-input-multi-select.component';

describe('FormInputMultiSelectComponent', () => {
  let component: FormInputMultiSelectComponent;
  let fixture: ComponentFixture<FormInputMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
