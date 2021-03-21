import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFactory } from './services/form-factory/form-factory.service';
import { FormInputFactory } from './services/form-input-factory/form-input-factory.service';

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule],
  providers: [FormFactory, FormInputFactory],
  exports: []
})
export class NgxPowerFormsModule {}
