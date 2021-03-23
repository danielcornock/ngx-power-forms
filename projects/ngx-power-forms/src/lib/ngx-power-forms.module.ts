import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputErrorComponent } from './components/form-input-error/form-input-error.component';
import { FormInputComponent } from './form-input-components/form-input/form-input.component';
import { PowerFormsModuleConfig } from './interfaces/power-forms-module-config.interface';
import { ErrorsDictionary, getErrorDictionaryValue } from './providers/error-dictionary.provider';
import { FormFactory } from './services/form-factory/form-factory.service';
import { FormInputFactory } from './services/form-input-factory/form-input-factory.service';

@NgModule({
  declarations: [FormInputComponent, FormInputErrorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [FormFactory, FormInputFactory],
  exports: [FormInputComponent, FormInputErrorComponent]
})
export class NgxPowerFormsModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgxPowerFormsModule) {
    if (parentModule) {
      throw new Error('NgxPowerFormsModule is already loaded. Please import it in one root module only.');
    }
  }

  public static forRoot(config: PowerFormsModuleConfig): ModuleWithProviders<NgxPowerFormsModule> {
    return {
      ngModule: NgxPowerFormsModule,
      providers: [
        { provide: ErrorsDictionary, useValue: getErrorDictionaryValue(config.customErrors) }
      ]
    };
  }
}
