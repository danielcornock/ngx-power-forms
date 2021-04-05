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
    const control = this.formBuilder.control({ value: config.value, disabled: config.disabled }, {
      validators: config.validators ?? [],
      asyncValidators: config.asyncValidators ?? []
    });

    return new FormInputField(config, control);
  }
}
