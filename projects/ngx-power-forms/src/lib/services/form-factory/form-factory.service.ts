import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormContainer } from '../../instances/form-container';
import { FormInputField } from '../../instances/form-input-field';
import { FormFactoryConfig } from '../../interfaces/form-factory-config.interface';
import { FormInputFactory } from '../form-input-factory/form-input-factory.service';

@Injectable()
export class FormFactory {

  constructor(private formBuilder: FormBuilder, private formInputFactory: FormInputFactory) {}

  public create(config: FormFactoryConfig): FormContainer {
    const fields = this.createFormFields(config.fields);
    const formGroup = this.createFormGroup(fields);

    return new FormContainer(fields, formGroup, config.onSave);
  }

  private createFormFields(fields: FormFactoryConfig['fields']): Array<FormInputField> {
    return fields.map((field) => {
      if (field instanceof FormInputField) {
        return field;
      } else {
        return this.formInputFactory.create(field);
      }
    });
  }

  private createFormGroup(options: Array<FormInputField>): FormGroup {
    const formGroupConfig = options.reduce((formConfig: Record<string, FormControl>, field: FormInputField) => {
      formConfig[field.name] = field.control;

      return formConfig;
    }, {});

    return this.formBuilder.group(formGroupConfig, {});
  }
}
