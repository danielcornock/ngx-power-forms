import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-number',
  templateUrl: './form-input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputNumberComponent extends FormInputComponent {}
