import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormInputFieldsObject } from '../interfaces';
import { FormGroupValue } from '../interfaces/form-group-value.interface';
import { FormInputField } from './form-input-field';

export class FormContainer {
  constructor(
    public fields: Array<FormInputField>,
    public formGroup: FormGroup,
    private onSaveFn?: (formValue: FormGroupValue) => void | Promise<void>
  ) {}

  public getFieldsObject(): FormInputFieldsObject {
    return this.fields.reduce((obj: Record<string, FormInputField>, field) => {
      obj[field.name] = field;
      return obj;
    }, {});
  }

  public save(): void {
    if (this.onSaveFn) {
      this.onSaveFn(this.formGroup.value);
    }
  }

  public get value(): FormGroupValue {
    return this.formGroup.value;
  }

  public get value$(): Observable<FormGroupValue> {
    return this.formGroup.valueChanges;
  }

  public setDisabled(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  public getField(name: string): FormInputField | undefined {
    return this.fields.find(field => field.name === name);
  }
}
