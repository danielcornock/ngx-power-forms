import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputSelectCustomConfig } from './form-input-custom-config.interface';

export type FormInputConfig = FormInputTextConfig | FormInputSelectConfig;

export interface FormInputBaseConfig {
  name: string;
  label: string;
  type: string;
  value?: any;
  placeholder?: string;
  validators?: Array<ValidatorFn>;
  asyncValidators?: Array<AsyncValidatorFn>;
}

export interface FormInputTextConfig extends FormInputBaseConfig {
  type: FormInputType.TEXT | FormInputType.EMAIL;
}

export interface FormInputSelectConfig extends FormInputConfigWithCustomConfig<FormInputSelectCustomConfig> {
  type: FormInputType.SELECT;
}

export interface FormInputConfigWithCustomConfig<T> extends FormInputBaseConfig {
  customConfig: T;
}
