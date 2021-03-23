import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges } from '@angular/core';
import { ErrorsDictionary } from '../../providers/error-dictionary.provider';

@Component({
  selector: 'pow-form-input-error',
  templateUrl: './form-input-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputErrorComponent implements OnChanges {
  @Input()
  public errors: Record<string, any> | null;

  public error: string | null;

  constructor(@Inject(ErrorsDictionary) private errorsDictionary: Record<string, string>){}

  ngOnChanges(): void {
    if (this.errors && Object.keys(this.errors).length) {
      const firstError = Object.keys(this.errors)[0];
      this.error = this.errorsDictionary[firstError];
    } else {
      this.error = null;
    }
  }
}
