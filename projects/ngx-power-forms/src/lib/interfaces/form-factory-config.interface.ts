import { FormGroupValue } from './form-group-value.interface';
import { FormInputConfig } from './form-input-config.interface';

export interface FormFactoryConfig {
  fields: Array<FormInputConfig>;
  onSave(formConfig: FormGroupValue): void | Promise<void>;
}
