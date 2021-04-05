import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormInputComponent } from 'projects/ngx-power-forms/src/public-api';
import { FormInputRangeCustomConfig } from '../../interfaces/form-input-range-config.interface';

@Component({
  selector: 'app-form-input-range',
  templateUrl: './form-input-range.component.html',
  styleUrls: ['./form-input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputRangeComponent extends FormInputComponent<FormInputRangeCustomConfig> {}
