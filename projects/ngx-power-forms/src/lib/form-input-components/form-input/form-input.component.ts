import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormInputField } from '../../instances';

@Component({
  selector: 'pow-form-input',
  templateUrl: './form-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent<TCustomConfig = any> implements OnInit {
  @Input()
  public formInputField: FormInputField<TCustomConfig>;

  @HostBinding('class')
  public get classes(): string {
    return `form-input-host form-input-host-${this.formInputField.type} form-input-host-${this.formInputField.name}`;
  }

  public ngOnInit(): void {
    if (this.formInputField.hooks?.onInit) {
      this.formInputField.hooks.onInit(this.formInputField);
    }
  }
}
