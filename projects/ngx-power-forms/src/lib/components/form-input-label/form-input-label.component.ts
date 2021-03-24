import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormInputField } from '../../instances';

@Component({
  selector: 'pow-form-input-label',
  templateUrl: './form-input-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputLabelComponent {
  @Input()
  public formInputField: FormInputField;
}
