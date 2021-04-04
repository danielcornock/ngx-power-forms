import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FormInputField } from '../../instances';

@Component({
  selector: 'pow-form-input',
  templateUrl: './form-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent<TCustomConfig = any> {
  @Input()
  public formInputField: FormInputField<TCustomConfig>;

  @HostBinding('class')
  public get classes(): string {
    return `form-input-host form-input-host-${this.formInputField.type} form-input-host-${this.formInputField.name}`;
  }
}
