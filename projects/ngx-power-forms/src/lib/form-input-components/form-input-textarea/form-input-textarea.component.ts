import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormInputTextareaCustomConfig } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-textarea',
  templateUrl: './form-input-textarea.component.html',
  styleUrls: ['./form-input-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputTextareaComponent extends FormInputComponent<FormInputTextareaCustomConfig> {}
