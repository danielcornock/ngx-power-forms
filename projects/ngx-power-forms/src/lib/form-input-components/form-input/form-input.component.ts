import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FormInputField } from '../../instances';

@Component({
  selector: 'pow-form-input',
  templateUrl: './form-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent {
  @Input()
  public formInputField: FormInputField;

  @HostBinding('class')
  public classes = 'form-input-host';
}
