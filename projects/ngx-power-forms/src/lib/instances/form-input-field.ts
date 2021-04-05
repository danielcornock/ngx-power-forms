import { FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputConfig, FormInputConfigWithCustomConfig, FormInputTextConfig } from '../interfaces/form-input-config.interface';

export class FormInputField<TCustomConfig = any> {
  public name: string;
  public label: string;
  public control: FormControl;
  public type: FormInputType | string;
  public placeholder: string;

  public customConfig: TCustomConfig;

  public errors$: Observable<ValidationErrors | null>;
  public value$: Observable<any>;

  public isRequired: boolean;

  constructor(config: FormInputConfig, control: FormControl) {
    this.control = control;
    this.name = config.name;
    this.label = config.label;
    this.type = config.type;
    this.placeholder = (config as FormInputTextConfig).placeholder ?? '';
    this.customConfig = (config as FormInputConfigWithCustomConfig<any>).customConfig;

    this.isRequired = config.validators?.includes(Validators.required) ?? false;
    this.value$ = this.control.valueChanges;
    this.errors$ = this.value$.pipe(map(() => (this.control.dirty && this.control.invalid && this.control.errors) || null));
  }

  public get value(): any {
    return this.control.value;
  }

  public get isDisabled(): boolean {
    return this.control.disabled;
  }

  public setValue(newValue: any): void {
    this.control.setValue(newValue);
  }

  public setError(value: Record<string, any>): void {
    this.control.setErrors(value);
  }

  public setDisabled(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}
