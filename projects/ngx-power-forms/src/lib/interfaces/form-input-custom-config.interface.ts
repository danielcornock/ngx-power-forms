import { Observable } from 'rxjs';
import { SelectOption } from './select-option.interface';

export interface FormInputSelectCustomConfig {
  options: Array<SelectOption> | Observable<SelectOption[]>;
}

export interface FormInputCheckboxCustomConfig {
  useTemplateLabel?: boolean;
}

export interface FormInputRadioSetCustomConfig {
  options: Array<SelectOption> | Observable<SelectOption[]>;
}

export interface FormInputTextareaCustomConfig {
  minLines?: number;
}
