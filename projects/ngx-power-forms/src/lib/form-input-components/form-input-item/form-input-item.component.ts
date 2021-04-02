import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FormInputType } from '../../constants';
import { FormInputField } from '../../instances';

@Component({
  selector: 'pow-form-input-item',
  templateUrl: './form-input-item.component.html',
  styleUrls: ['./form-input-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputItemComponent {
  @Input()
  public formInputField: FormInputField;

  public readonly formInputType = FormInputType;

  @HostBinding('class')
  public class = 'form-input-host';
}
