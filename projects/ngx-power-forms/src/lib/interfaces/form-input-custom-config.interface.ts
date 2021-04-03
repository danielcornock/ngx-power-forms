import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomSelectOptionComponent } from '../components';
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

export interface FormInputMultiSelectCustomConfig {
  options: Array<SelectOption> | Observable<SelectOption[]>;
}

export interface FormInputCustomSelectCustomConfig extends FormInputSelectCustomConfig {
  component?: Type<CustomSelectOptionComponent>;
}
