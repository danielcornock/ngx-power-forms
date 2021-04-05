import { InjectionToken, Type } from '@angular/core';
import { FormInputType } from '../constants';
import { FormInputComponent } from '../form-input-components';
import { PowerFormsModuleCustomOptions } from '../interfaces';

export const defaultcustomInputComponents = {};

export const CustomInputComponents = new InjectionToken('customInputComponentsToken');

export function getCustomInputComponentsValue(
  customComponents?: Record<string, Type<FormInputComponent>>
): Record<string, PowerFormsModuleCustomOptions> {
  const customKeys = Object.keys(customComponents || {});
  const builtInKeys = Object.values(FormInputType);

  customKeys.forEach((customKey) => {
    if ((builtInKeys as string[]).includes(customKey)) {
      throw new Error(`The key '${customKey}' has already been used for a built in input type. Please assign a different key to your custom input.`);
    }
  });

  return {
    ...defaultcustomInputComponents,
    ...customComponents
  };
}
