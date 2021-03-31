import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges } from '@angular/core';
import { ErrorDictionary } from '../../interfaces/error-dictionary.interface';
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

  constructor(@Inject(ErrorsDictionary) private errorsDictionary: ErrorDictionary){}

  ngOnChanges(): void {
    if (this.errors && Object.keys(this.errors).length) {
      this.error = this.getErrorMessage();
    } else {
      this.error = null;
    }
  }

  private getErrorMessage(): string {
    const firstErrorKey = Object.keys(this.errors as object)[0];

    const clientError = this.errorsDictionary[firstErrorKey];

    if (clientError !== undefined) {
      return clientError(this.errors?.[firstErrorKey]);
    } else {
      return this.errors?.[firstErrorKey];
    }
  }
}
