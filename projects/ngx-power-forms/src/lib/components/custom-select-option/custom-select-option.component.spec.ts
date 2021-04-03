import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectOptionComponent } from './custom-select-option.component';

describe('CustomSelectOptionComponent', () => {
  let component: CustomSelectOptionComponent;
  let fixture: ComponentFixture<CustomSelectOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
