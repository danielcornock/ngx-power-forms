import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormInputMultiSelectCustomConfig, SelectOption } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-multi-select',
  templateUrl: './form-input-multi-select.component.html',
  styleUrls: ['./form-input-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputMultiSelectComponent extends FormInputComponent<FormInputMultiSelectCustomConfig> implements OnInit {
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
