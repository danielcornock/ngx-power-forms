import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: 'This field is required',
  maxLength: 'Too many characters',
  minLength: 'Too little characters',
  max: 'Number is too high',
  min: 'Number is too low'
};

export const ErrorsDictionary = new InjectionToken('ErrorsDictionaryToken');

export function getErrorDictionaryValue(customErrors: Record<string, string> = {}): Record<string, string> {
  return {
    ...defaultErrors,
    ...customErrors
  };
}
