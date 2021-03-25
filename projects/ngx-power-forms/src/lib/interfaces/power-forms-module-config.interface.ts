export interface PowerFormsModuleConfig {
  customInputs?: {};
  customErrors?: Record<string, string>;
  customOptions?: Partial<PowerFormsModuleCustomOptions>;
}

export interface PowerFormsModuleCustomOptions {
  showRequiredSymbol: boolean;
  requiredSymbol: string;
}
