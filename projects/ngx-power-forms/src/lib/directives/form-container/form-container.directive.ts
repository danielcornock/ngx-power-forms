import { Directive, Input } from '@angular/core';
import { FormContainer } from '../../instances';

@Directive({
  selector: '[powFormContainer]'
})
export class FormContainerDirective {
  @Input()
  public powFormContainer: FormContainer;
}
