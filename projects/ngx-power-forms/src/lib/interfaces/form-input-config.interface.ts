import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputCheckboxCustomConfig, FormInputMultiSelectCustomConfig, FormInputRadioSetCustomConfig, FormInputSelectCustomConfig, FormInputTextareaCustomConfig } from './form-input-custom-config.interface';

export type FormInputConfig = FormInputTextConfig
| FormInputSelectConfig
| FormInputCheckboxConfig
| FormInputRadioSetConfig
| FormInputTextareaConfig
| FormInputMultiSelectConfig;

export interface FormInputBaseConfig {
  name: string;
  label: string;
  type: FormInputType | string;
  value?: any;
  placeholder?: string;
  validators?: Array<ValidatorFn>;
  asyncValidators?: Array<AsyncValidatorFn>;
}

export interface FormInputTextConfig extends FormInputBaseConfig {
  type: FormInputType.TEXT | FormInputType.EMAIL | FormInputType.NUMBER | FormInputType.DATE | FormInputType.DATETIME | FormInputType.MONTH;
  value?: string | number;
}

export interface FormInputSelectConfig extends FormInputConfigWithCustomConfig<FormInputSelectCustomConfig> {
  type: FormInputType.SELECT;
}

export interface FormInputMultiSelectConfig extends FormInputConfigWithCustomConfig<FormInputMultiSelectCustomConfig> {
  type: FormInputType.MULTI_SELECT;
  value: Array<any>;
}

export interface FormInputCheckboxConfig extends FormInputConfigWithCustomConfig<FormInputCheckboxCustomConfig> {
  type: FormInputType.CHECKBOX;
  value?: boolean;
}

export interface FormInputRadioSetConfig extends FormInputConfigWithCustomConfig<FormInputRadioSetCustomConfig> {
  type: FormInputType.RADIO;
}

export interface FormInputTextareaConfig extends FormInputBaseConfig {
  type: FormInputType.TEXTAREA;
  value?: string;
  customConfig?: FormInputTextareaCustomConfig;
}
export interface FormInputConfigWithCustomConfig<T> extends FormInputBaseConfig {
  customConfig: T;
}
