import { FormInputBaseConfig } from 'projects/ngx-power-forms/src/public-api';
import { FormInputCustomType } from '../constants/form-input-custom-type.constant';

export interface FormInputRangeConfig extends FormInputBaseConfig {
  type: FormInputCustomType.RANGE;
  customConfig: FormInputRangeCustomConfig;
  value: number;
}

export interface FormInputRangeCustomConfig {
  min: number;
  max: number;
  step: number;
}
