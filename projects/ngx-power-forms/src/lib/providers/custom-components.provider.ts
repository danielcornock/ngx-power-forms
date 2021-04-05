import { InjectionToken, Type } from '@angular/core';
import { FormInputType } from '../constants';
import { FormInputComponent } from '../form-input-components';

export const CustomInputComponents = new InjectionToken('customInputComponentsToken');

export interface PowerFormsModuleCustomComponents {
  [key: string]: Type<FormInputComponent>;
}

export function getCustomInputComponentsValue(
  customComponents?: PowerFormsModuleCustomComponents
): PowerFormsModuleCustomComponents {
  const customKeys = Object.keys(customComponents || {});

  if (!customKeys.length) {
    return {};
  }

  const builtInKeys = Object.values(FormInputType);

  customKeys.forEach((customKey) => {
    if ((builtInKeys as string[]).includes(customKey)) {
      throw new Error(`The key '${customKey}' has already been used for a built in input type. Please assign a different key to your custom input.`);
    }
  });

  return {
    ...customComponents
  };
}
