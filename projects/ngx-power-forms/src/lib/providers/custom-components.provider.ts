import { InjectionToken, Type } from '@angular/core';
import { FormInputComponent } from '../form-input-components';
import { PowerFormsModuleCustomOptions } from '../interfaces';

export const defaultcustomInputComponents = {};

export const customInputComponents = new InjectionToken('customInputComponentsToken');

export function getcustomInputComponentsValue(
  customComponents?: Record<string, Type<FormInputComponent>>
): Record<string, PowerFormsModuleCustomOptions> {
  return {
    ...defaultcustomInputComponents,
    ...customComponents
  };
}
