import { Type } from '@angular/core';
import { FormInputComponent } from '../form-input-components';
import { ErrorDictionary } from './error-dictionary.interface';

export interface PowerFormsModuleConfig {
  customErrors?: ErrorDictionary;
  customOptions?: Partial<PowerFormsModuleCustomOptions>;
  customInputComponents?: Record<string, Type<FormInputComponent>>;
}

export interface PowerFormsModuleCustomOptions {
  showRequiredSymbol: boolean;
  requiredSymbol: string;
}
