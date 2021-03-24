import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormInputSelectCustomConfig, SelectOption } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-select',
  templateUrl: './form-input-select.component.html',
  styleUrls: ['./form-input-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputSelectComponent extends FormInputComponent<FormInputSelectCustomConfig> implements OnInit {
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
