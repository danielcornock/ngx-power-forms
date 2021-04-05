import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomSelectOptionComponent } from './components';
import { FormInputErrorComponent } from './components/form-input-error/form-input-error.component';
import { FormInputLabelComponent } from './components/form-input-label/form-input-label.component';
import { FormInputCheckboxComponent } from './form-input-components/form-input-checkbox/form-input-checkbox.component';
import { FormInputCustomMultiSelectComponent } from './form-input-components/form-input-custom-multi-select/form-input-custom-multi-select.component';
import { FormInputCustomSelectComponent } from './form-input-components/form-input-custom-select/form-input-custom-select.component';
import { FormInputItemComponent } from './form-input-components/form-input-item/form-input-item.component';
import { FormInputMultiSelectComponent } from './form-input-components/form-input-multi-select/form-input-multi-select.component';
import { FormInputNumberComponent } from './form-input-components/form-input-number/form-input-number.component';
import { FormInputRadioSetComponent } from './form-input-components/form-input-radio-set/form-input-radio-set.component';
import { FormInputSelectComponent } from './form-input-components/form-input-select/form-input-select.component';
import { FormInputTextareaComponent } from './form-input-components/form-input-textarea/form-input-textarea.component';
import { FormInputComponent } from './form-input-components/form-input/form-input.component';
import { PowerFormsModuleConfig } from './interfaces/power-forms-module-config.interface';
import { CustomInputComponents, getCustomInputComponentsValue } from './providers/custom-components.provider';
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
    FormInputCheckboxComponent,
    FormInputRadioSetComponent,
    FormInputTextareaComponent,
    FormInputMultiSelectComponent,
    FormInputItemComponent,
    FormInputCustomSelectComponent,
    CustomSelectOptionComponent,
    FormInputCustomMultiSelectComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  providers: [FormFactory, FormInputFactory],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormInputComponent,
    FormInputErrorComponent,
    FormInputSelectComponent,
    FormInputNumberComponent,
    FormInputCheckboxComponent,
    FormInputLabelComponent,
    FormInputRadioSetComponent,
    FormInputTextareaComponent,
    FormInputMultiSelectComponent,
    FormInputItemComponent,
    FormInputCustomSelectComponent,
    CustomSelectOptionComponent,
    FormInputCustomMultiSelectComponent
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
        { provide: CustomFormOptions, useValue: getCustomFormOptionsValue(config?.customOptions) },
        { provide: CustomInputComponents, useValue: getCustomInputComponentsValue(config?.customInputComponents) }
      ]
    };
  }
}
