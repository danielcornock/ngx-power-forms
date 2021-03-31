import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputTextareaComponent } from './form-input-textarea.component';

describe('FormInputTextareaComponent', () => {
  let component: FormInputTextareaComponent;
  let fixture: ComponentFixture<FormInputTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
