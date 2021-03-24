import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormInputCheckboxCustomConfig } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-checkbox',
  templateUrl: './form-input-checkbox.component.html',
  styleUrls: ['./form-input-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputCheckboxComponent extends FormInputComponent<FormInputCheckboxCustomConfig> {}
