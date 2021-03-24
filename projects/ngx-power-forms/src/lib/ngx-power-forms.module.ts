import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputErrorComponent } from './components/form-input-error/form-input-error.component';
import { FormInputLabelComponent } from './components/form-input-label/form-input-label.component';
import { FormInputCheckboxComponent } from './form-input-components/form-input-checkbox/form-input-checkbox.component';
import { FormInputNumberComponent } from './form-input-components/form-input-number/form-input-number.component';
import { FormInputSelectComponent } from './form-input-components/form-input-select/form-input-select.component';
import { FormInputComponent } from './form-input-components/form-input/form-input.component';
import { PowerFormsModuleConfig } from './interfaces/power-forms-module-config.interface';
import { CustomFormOptions, getCustomFormOptionsValue } from './providers/custom-form-options.provider';
import { ErrorsDictionary, getErrorDictionaryValue } from './providers/error-dictionary.provider';
import { FormFactory } from './services/form-factory/form-factory.service';
import { FormInputFactory } from './services/form-input-factory/form-input-factory.service';

@NgModule({
  declarations: [
    FormInputComponent,
    FormInputErrorComponent,
    FormInputSelectComponent,
    FormInputLabelComponent,
    FormInputNumberComponent,
    FormInputCheckboxComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [FormFactory, FormInputFactory],
  exports: [
    FormInputComponent,
    FormInputErrorComponent,
    FormInputSelectComponent,
    FormInputNumberComponent,
    FormInputCheckboxComponent,
    FormInputLabelComponent
  ]
})
export class NgxPowerFormsModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgxPowerFormsModule) {
    if (parentModule) {
      throw new Error('NgxPowerFormsModule is already loaded. Please import it in one root module only.');
    }
  }

  public static forRoot(config?: PowerFormsModuleConfig): ModuleWithProviders<NgxPowerFormsModule> {
    return {
      ngModule: NgxPowerFormsModule,
      providers: [
        { provide: ErrorsDictionary, useValue: getErrorDictionaryValue(config?.customErrors) },
        { provide: CustomFormOptions, useValue: getCustomFormOptionsValue(config?.customOptions)}
      ]
    };
  }
}
