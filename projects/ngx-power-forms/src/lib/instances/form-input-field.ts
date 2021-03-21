import { FormControl, Validators } from '@angular/forms';
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
}
