import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormContainer, FormFactory, FormInputField, FormInputType } from 'projects/ngx-power-forms/src/public-api';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormContainer;
  public fields: Record<string, FormInputField>;

  constructor(private formFactory: FormFactory){}

  ngOnInit(): void {
    this.form = this.formFactory.create({
      fields: [
        {
          name: 'textField',
          label: 'Text field',
          type: FormInputType.TEXT,
          value: 'Starting value',
          placeholder: 'Placeholder text',
          validators: [Validators.required]
        },
        {
          name: 'selectField',
          label: 'Select field',
          type: FormInputType.SELECT,
          customConfig: {
            options: [
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 }
            ]
          }
        },
        {
          name: 'selectReactiveField',
          label: 'Reactive select field',
          type: FormInputType.SELECT,
          customConfig: {
            options: of([
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 }
            ])
          }
        },
        {
          name: 'numberField',
          label: 'Number field',
          type: FormInputType.NUMBER
        },
        {
          name: 'checkboxField',
          label: 'Checkbox field',
          type: FormInputType.CHECKBOX,
          customConfig: {}
        }
      ],
      onSave: (formValue) => console.log(formValue)
    });

    this.fields = this.form.getFieldsObject();
  }
}
