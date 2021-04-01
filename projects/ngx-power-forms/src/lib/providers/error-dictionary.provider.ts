import { InjectionToken } from '@angular/core';
import { ErrorDictionary } from '../interfaces/error-dictionary.interface';

export const defaultErrors = {
  required: () => 'This field is required',
  maxlength: (options: { requiredLength: number, actualLength: number }) => `${options.actualLength} out of ${options.requiredLength}. Too many characters`,
  minlength: (options: { requiredLength: number, actualLength: number }) => `${options.actualLength} out of ${options.requiredLength}. Too little characters`,
  max: (options: { max: number, actual: number }) => `Value must be less than ${options.max}`,
  min: (options: { min: number, actual: number }) => `Value must be greater than ${options.min}`
};

export const ErrorsDictionary = new InjectionToken('ErrorsDictionaryToken');

export function getErrorDictionaryValue(
  customErrors: ErrorDictionary = {}
): Record<string, (...args: any[]) => string> {
  return {
    ...defaultErrors,
    ...customErrors
  };
}
