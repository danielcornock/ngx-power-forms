import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomSelectOptionComponent, FormContainer, FormFactory, FormInputFieldsObject, FormInputType } from 'projects/ngx-power-forms/src/public-api';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormContainer;
  public fields: FormInputFieldsObject;

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
          label: 'Select field with placeholder',
          type: FormInputType.SELECT,
          placeholder: 'Select your option',
          customConfig: {
            options: [
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 }
            ]
          }
        },
        {
          name: 'selectFieldWithDefault',
          label: 'Select field with default',
          type: FormInputType.SELECT,
          placeholder: 'Select your option',
          value: 1,
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
          type: FormInputType.NUMBER,
          validators: [Validators.min(5)]
        },
        {
          name: 'checkboxField',
          label: 'Checkbox field',
          type: FormInputType.CHECKBOX,
          customConfig: {}
        },
        {
          name: 'radioField',
          label: 'Radio field',
          type: FormInputType.RADIO,
          customConfig: {
            options: [
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 }
            ]
          }
        },
        {
          name: 'reactiveRadioField',
          label: 'Reactive Radio field',
          type: FormInputType.RADIO,
          customConfig: {
            options: of([
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 }
            ])
          }
        },
        {
          name: 'textareaField',
          label: 'Text area field',
          type: FormInputType.TEXTAREA,
          validators: [Validators.minLength(20), Validators.maxLength(100)]
        },
        {
          name: 'multiSelectField',
          label: 'Multi select field',
          type: FormInputType.MULTI_SELECT,
          placeholder: 'Select your items',
          value: [1],
          customConfig: {
            options: [
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 }
            ]
          }
        },
        {
          name: 'dateField',
          label: 'Date field',
          type: FormInputType.DATETIME
        },
        {
          name: 'customSelect',
          label: 'Custom select',
          type: FormInputType.CUSTOM_SELECT,
          value: 1,
          customConfig: {
            options: [{ label: 'Hello', value: 1 }, { label: 'Yo!', value: 2 }],
            component: CustomSelectOptionComponent
          }
        },
        {
          name: 'customMultiSelect',
          label: 'Custom multi select',
          type: FormInputType.CUSTOM_MULTI_SELECT,
          value: [],
          customConfig: {
            options: [
              { label: 'Option 1', value: 1 },
              { label: 'Option 2', value: 2 },
              { label: 'Option 3', value: 3 }
            ]
          }
        }
      ],
      onSave: (formValue) => console.log(formValue)
    });

    this.fields = this.form.getFieldsObject();

    this.form.value$.subscribe(val => {
      console.log(this.form.formGroup);
    });
  }
}
