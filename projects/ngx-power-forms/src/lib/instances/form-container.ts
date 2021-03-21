import { FormGroup } from '@angular/forms';
import { FormInputField } from './form-input-field';

export class FormContainer {
  constructor(
    fields: Array<FormInputField>,
    formGroup: FormGroup,
    onSave: () => void | Promise<void>
  ) {}
}
