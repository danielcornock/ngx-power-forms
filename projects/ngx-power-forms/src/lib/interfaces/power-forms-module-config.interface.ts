import { ErrorDictionary } from './error-dictionary.interface';

export interface PowerFormsModuleConfig {
  customInputs?: {};
  customErrors?: ErrorDictionary;
  customOptions?: Partial<PowerFormsModuleCustomOptions>;
}

export interface PowerFormsModuleCustomOptions {
  showRequiredSymbol: boolean;
  requiredSymbol: string;
}
