import { FormInputCustomType } from '../constants/form-input-custom-type.constant';
import { FormInputRangeConfig } from '../interfaces/form-input-range-config.interface';

declare module '../../../../../ngx-power-forms/src/public-api' {
  interface FormInputConfigMap {
    [FormInputCustomType.RANGE]: FormInputRangeConfig;
  }
}