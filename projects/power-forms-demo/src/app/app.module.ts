import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormInputType, NgxPowerFormsModule } from 'projects/ngx-power-forms/src/public-api';
import { AppComponent } from './app.component';
import { FormInputRangeComponent } from './forms/components/form-input-range/form-input-range.component';


@NgModule({
  declarations: [
    AppComponent,
    FormInputRangeComponent
  ],
  imports: [
    BrowserModule,
    NgxPowerFormsModule.forRoot({
      customErrors: {
        required: () => 'Please ensure you fill in this field'
      },
      customInputComponents: {
        [FormInputType.MONTH]: FormInputRangeComponent
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
