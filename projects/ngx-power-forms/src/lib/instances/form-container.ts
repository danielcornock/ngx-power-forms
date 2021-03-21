import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormGroupValue } from '../interfaces/form-group-value.interface';
import { FormInputField } from './form-input-field';

export class FormContainer {
  constructor(
    private fields: Array<FormInputField>,
    public formGroup: FormGroup,
    private onSaveFn: (formValue: FormGroupValue) => void | Promise<void>
  ) {}

  public getOrderedFields(): Array<FormInputField> {
    return this.fields;
  }

  public getFieldsObject(): Record<string, FormInputField> {
    return this.fields.reduce((obj: Record<string, FormInputField>, field) => {
      obj[field.name] = field;
      return obj;
    }, {});
  }

  public save(formValue: FormGroupValue): void {
    this.onSaveFn(formValue);
  }

  public get value(): FormGroupValue {
    return this.formGroup.value;
  }

  public get value$(): Observable<FormGroupValue> {
    return this.formGroup.valueChanges;
  }
}
