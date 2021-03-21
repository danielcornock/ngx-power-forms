import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormInputField } from '../../instances/form-input-field';
import { FormInputConfig } from '../../interfaces/form-input-config.interface';

@Injectable({
  providedIn: 'root'
})
export class FormInputFactory {

  constructor(private formBuilder: FormBuilder) { }

  public create(config: FormInputConfig): FormInputField {
    const control = this.formBuilder.control(config.value, {
      validators: config.validators ?? [],
      asyncValidators: config.asyncValidators ?? []
    });

    return new FormInputField(config, control);
  }
}
