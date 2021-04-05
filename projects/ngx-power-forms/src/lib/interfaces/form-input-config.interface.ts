import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputCheckboxCustomConfig, FormInputCustomSelectCustomConfig, FormInputMultiSelectCustomConfig, FormInputRadioSetCustomConfig, FormInputSelectCustomConfig, FormInputTextareaCustomConfig } from './form-input-custom-config.interface';

export interface FormInputConfigMap {
  [FormInputType.TEXT]: FormInputTextConfig;
  [FormInputType.SELECT]: FormInputSelectConfig;
  [FormInputType.CHECKBOX]: FormInputCheckboxConfig;
  [FormInputType.RADIO]: FormInputRadioSetConfig;
  [FormInputType.TEXTAREA]: FormInputTextareaConfig;
  [FormInputType.MULTI_SELECT]: FormInputMultiSelectConfig;
  [FormInputType.CUSTOM_SELECT]: FormInputCustomSelectConfig;
  [FormInputType.CUSTOM_MULTI_SELECT]: FormInputCustomMultiSelectConfig;
}

export type FormInputConfig = FormInputConfigMap[keyof FormInputConfigMap];

export interface FormInputBaseConfig {
  name: string;
  label: string;
  type: FormInputType | string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  validators?: Array<ValidatorFn>;
  asyncValidators?: Array<AsyncValidatorFn>;
}

export interface FormInputTextConfig extends FormInputBaseConfig {
  type: FormInputType.TEXT | FormInputType.EMAIL | FormInputType.NUMBER | FormInputType.DATE | FormInputType.DATETIME | FormInputType.MONTH;
  value?: string | number;
}

export interface FormInputTextareaConfig extends FormInputBaseConfig {
  type: FormInputType.TEXTAREA;
  value?: string;
  customConfig?: FormInputTextareaCustomConfig;
}

export interface FormInputSelectConfig extends FormInputConfigWithCustomConfig<FormInputSelectCustomConfig> {
  type: FormInputType.SELECT;
}

export interface FormInputMultiSelectConfig extends FormInputConfigWithCustomConfig<FormInputMultiSelectCustomConfig> {
  type: FormInputType.MULTI_SELECT;
  value: Array<any>;
}

export interface FormInputCheckboxConfig extends OmitPlaceholder<FormInputConfigWithCustomConfig<FormInputCheckboxCustomConfig>> {
  type: FormInputType.CHECKBOX;
  value?: boolean;
}

export interface FormInputRadioSetConfig extends OmitPlaceholder<FormInputConfigWithCustomConfig<FormInputRadioSetCustomConfig>> {
  type: FormInputType.RADIO;
}

export interface FormInputCustomSelectConfig extends FormInputConfigWithCustomConfig<FormInputCustomSelectCustomConfig> {
  type: FormInputType.CUSTOM_SELECT;
}

export interface FormInputCustomMultiSelectConfig extends FormInputConfigWithCustomConfig<FormInputCustomSelectCustomConfig> {
  type: FormInputType.CUSTOM_MULTI_SELECT;
  value: Array<any>;
}

export interface FormInputConfigWithCustomConfig<T> extends FormInputBaseConfig {
  customConfig: T;
}

type OmitPlaceholder<T> = Omit<T, 'placeholder'>;
