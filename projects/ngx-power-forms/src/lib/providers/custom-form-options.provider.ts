import { InjectionToken } from '@angular/core';
import { PowerFormsModuleCustomOptions } from '../interfaces/power-forms-module-config.interface';

export const defaultCustomFormOptions: PowerFormsModuleCustomOptions = {};

export const CustomFormOptions = new InjectionToken('CustomOptionsToken');

export function getCustomFormOptionsValue(customOptions: Partial<PowerFormsModuleCustomOptions> = {}): PowerFormsModuleCustomOptions {
  return {
    ...defaultCustomFormOptions,
    ...customOptions
  };
}