import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormInputRadioSetCustomConfig, SelectOption } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-radio-set',
  templateUrl: './form-input-radio-set.component.html',
  styleUrls: ['./form-input-radio-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputRadioSetComponent extends FormInputComponent<FormInputRadioSetCustomConfig> implements OnInit {
  public dropdownOptions: Array<SelectOption>;
  public dropdownOptions$: Observable<SelectOption[]>;

  public ngOnInit(): void {
    if (this.formInputField.customConfig.options instanceof Observable) {
      this.dropdownOptions$ = this.formInputField.customConfig.options;
    } else {
      this.dropdownOptions = this.formInputField.customConfig.options;
    }
  }
}
