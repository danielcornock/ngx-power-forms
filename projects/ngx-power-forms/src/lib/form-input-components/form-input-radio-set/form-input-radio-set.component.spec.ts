import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputRadioSetComponent } from './form-input-radio-set.component';

describe('FormInputRadioSetComponent', () => {
  let component: FormInputRadioSetComponent;
  let fixture: ComponentFixture<FormInputRadioSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputRadioSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputRadioSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
