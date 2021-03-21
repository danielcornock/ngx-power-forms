import { FormInputField } from '../instances/form-input-field';
import { FormInputConfig } from './form-input-config.interface';

export interface FormFactoryConfig {
  fields: Array<FormInputConfig | FormInputField>;
  onSave(): void | Promise<void>;
}
