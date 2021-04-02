import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputItemComponent } from './form-input-item.component';

describe('FormInputItemComponent', () => {
  let component: FormInputItemComponent;
  let fixture: ComponentFixture<FormInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
