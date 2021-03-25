import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputCheckboxCustomConfig, FormInputRadioSetCustomConfig, FormInputSelectCustomConfig } from './form-input-custom-config.interface';

export type FormInputConfig = FormInputTextConfig | FormInputSelectConfig | FormInputCheckboxConfig | FormInputRadioSetConfig;

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
  type: FormInputType.TEXT | FormInputType.EMAIL | FormInputType.NUMBER;
  value?: string | number;
}

export interface FormInputSelectConfig extends FormInputConfigWithCustomConfig<FormInputSelectCustomConfig> {
  type: FormInputType.SELECT;
}

export interface FormInputCheckboxConfig extends FormInputConfigWithCustomConfig<FormInputCheckboxCustomConfig> {
  type: FormInputType.CHECKBOX;
  value?: boolean;
}

export interface FormInputRadioSetConfig extends FormInputConfigWithCustomConfig<FormInputRadioSetCustomConfig> {
  type: FormInputType.RADIO;
}
export interface FormInputConfigWithCustomConfig<T> extends FormInputBaseConfig {
  customConfig: T;
}
