import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormContainer } from '../../instances';

@Component({
  selector: 'pow-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input()
  public formContainer: FormContainer;
}
