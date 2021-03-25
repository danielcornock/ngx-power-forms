import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormInputRadioSetCustomConfig } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-radio-set',
  templateUrl: './form-input-radio-set.component.html',
  styleUrls: ['./form-input-radio-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputRadioSetComponent extends FormInputComponent<FormInputRadioSetCustomConfig> {}
