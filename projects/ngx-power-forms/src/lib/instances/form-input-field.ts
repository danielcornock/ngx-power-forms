import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormInputType } from '../constants/form-input-type.constant';
import { FormInputConfig, FormInputConfigWithCustomConfig } from '../interfaces/form-input-config.interface';

export class FormInputField<TCustomConfig = undefined> {
  public name: string;
  public label: string;
  public control: FormControl;
  public type: FormInputType;
  public placeholder: string;

  public customConfig?: TCustomConfig;

  private required: boolean;

  constructor(config: FormInputConfig, control: FormControl) {
    this.control = control;
    this.name = config.name;
    this.label = config.label;
    this.placeholder = config.placeholder ?? '';
    this.type = config.type;
    this.customConfig = (config as FormInputConfigWithCustomConfig<any>).customConfig;

    this.required = config.validators?.includes(Validators.required) ?? false;
  }

  public get isRequired(): boolean {
    return this.required;
  }

  public get value(): any {
    return this.control.value;
  }

  public get value$(): Observable<any> {
    return this.control.valueChanges;
  }

  public get errors$(): Record<string, any> | null {
    return this.value$.pipe(map(() => (this.control.touched && this.control.invalid && this.control.errors) ?? null));
  }

  public setValue(newValue: any): void {
    this.control.setValue(newValue);
  }
}
