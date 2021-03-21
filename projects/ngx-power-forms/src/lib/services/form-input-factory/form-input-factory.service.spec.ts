import { TestBed } from '@angular/core/testing';
import { FormInputFactory } from './form-input-factory.service';


describe('FormInputFactory', () => {
  let service: FormInputFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormInputFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
