import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputCustomSelectComponent } from './form-input-custom-select.component';

describe('FormInputCustomSelectComponent', () => {
  let component: FormInputCustomSelectComponent;
  let fixture: ComponentFixture<FormInputCustomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputCustomSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputCustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
