import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { FormInputField } from '../../instances';
import { PowerFormsModuleCustomOptions } from '../../interfaces/power-forms-module-config.interface';
import { CustomFormOptions } from '../../providers/custom-form-options.provider';

@Component({
  selector: 'pow-form-input-label',
  templateUrl: './form-input-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputLabelComponent {
  @Input()
  public formInputField: FormInputField;

  public requiredSymbol?: string;

  constructor(@Inject(CustomFormOptions) customOptions: PowerFormsModuleCustomOptions) {
    if (customOptions.showRequiredSymbol) {
      this.requiredSymbol = customOptions.requiredSymbol;
    }
  }
}
