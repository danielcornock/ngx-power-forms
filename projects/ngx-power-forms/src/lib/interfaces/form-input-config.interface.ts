import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputCheckboxCustomConfig, FormInputCustomSelectCustomConfig, FormInputMultiSelectCustomConfig, FormInputRadioSetCustomConfig, FormInputSelectCustomConfig, FormInputTextareaCustomConfig } from './form-input-custom-config.interface';
import { FormInputHooks } from './form-input-hooks.interface';

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
  /* Key of field - used in FormGroup */
  name: string;

  /* Label to be displayed */
  label: string;

  /* Type - is passed in to input for things such as email, and helps determine which field to display when using a dynamic form */
  type: FormInputType | string;

  /* The starting/default value of the form field */
  value?: any;

  /* Display a placeholder text (where applicable) */
  placeholder?: string;

  /* Sets whether the form input is disabled on initialisation */
  disabled?: boolean;

  /* Array of validators, same as what you would pass in to a form control */
  validators?: Array<ValidatorFn>;

  /* Array of async validators, same as what you would pass in to a form control */
  asyncValidators?: Array<AsyncValidatorFn>;

  /* Hooks that are ran on the respective life cycle within each form component */
  hooks?: FormInputHooks;
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

export interface FormInputCheckboxConfig extends OmitPlaceholder<FormInputBaseConfig> {
  type: FormInputType.CHECKBOX;
  value?: boolean;
  customConfig?: FormInputCheckboxCustomConfig;
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
