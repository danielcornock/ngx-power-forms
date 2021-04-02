# Ngx Power Forms

A library designed to abstract away the repetitive elements of building a form. Takes away a small amount of the flexibility provided by Angular forms, but saves you time in the process. The library is built on top of Angular reactive forms and makes extensive use of observables, to allow for `onPush` change detection.

Demo is available [here](https://ngx-power-forms.netlify.app/).

## Installation and setup

To install the library, use

```
npm i ngx-power-forms
```

Once installed, you should add the `NgxPowerFormsModule` using `forRoot` to a core module. Within `forRoot` you can provide an object to further customise things such as form validation messages and custom components (coming soon).

```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPowerFormsModule.forRoot({
      customErrors: {
        required: () => 'Please ensure you fill in this field'
      },
      customOptions: {
        showRequiredSymbol: false
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

To access the styles for the project, you should install the stylesheet in to your `angular.json` file.

```json
"architect": {
  "build": {
    "options": {
      "styles": [
        "node_modules/ngx-power-forms/src/lib/styles/index.scss",
      ]
    }
  }
}
```

## Creating a form

To create your first form, you can use the `FormFactory` service.

Below you can find an extensive example of a range of inputs that are available using the service.

```ts
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
          label: 'Select field with placeholder',
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
        }
      ],
      onSave: (formValue) => console.log(formValue)
    });

    this.fields = this.form.getFieldsObject();
  }
}

```

To then use these fields in your template, it looks as simple as this:

```html
<form [formGroup]="form.formGroup" (ngSubmit)="form.save()">
  <pow-form-input [formInputField]="fields.textField"></pow-form-input>
  <pow-form-input [formInputField]="fields.dateField"></pow-form-input>
  <pow-form-input-select [formInputField]="fields.selectField"></pow-form-input-select>
  <pow-form-input-select [formInputField]="fields.selectReactiveField"></pow-form-input-select>
  <pow-form-input-multi-select [formInputField]="fields.multiSelectField"></pow-form-input-multi-select>
  <pow-form-input-number [formInputField]="fields.numberField"></pow-form-input-number>
  <pow-form-input-checkbox [formInputField]="fields.checkboxField"></pow-form-input-checkbox>
  <pow-form-input-radio-set [formInputField]="fields.radioField"></pow-form-input-radio-set>
  <pow-form-input-textarea [formInputField]="fields.textareaField"></pow-form-input-textarea>
</form>
```

Alternatively, if you don't need anything in between the form inputs, you can use `pow-form-input-item` to loop through your fields in the order that they were added to the array.

```html
<form [formGroup]="form.formGroup" (ngSubmit)="form.save()">
  <pow-form-input-item *ngFor="let field of form.fields" [formInputField]="field"></pow-form-input-item>
</form>
```

## Typings

Typings vary between each form input type. By assigning a value to the `type` field using the `FormInputType` enum, TypeScript is able to determine the intellisense needed, for example requiring `options` in the `customConfig` for select and radio fields.


## Customisability

As well as being able to override the classes yourself, the project extensively uses CSS variables. This aims to make the forms as customisable as possible without having to manually override CSS classes, with `!important` sprinkled everywhere.

```scss
  /* Form input label */
  --form-input-label-font-size: 14px;
  --form-input-label-margin-bottom: 8px;
  --form-input-label-font-weight: 500;
  --form-input-label-letter-spacing: 0.5px;
  --form-input-label-color: grey;

  /* Form input label error state */
  --form-input-label-color--error: red;

  /* Form input field */
  --form-input-background-color: white;
  --form-input-vertical-padding: 12px;
  --form-input-horizontal-padding: 12px;
  --form-input-padding: var(--form-input-vertical-padding) var(--form-input-horizontal-padding);
  --form-input-border-color: grey;
  --form-input-border: 1px solid var(--form-input-border-color);
  --form-input-border-radius: 5px;
  --form-input-font-size: 16px;
  --form-input-font-color: black;
  --form-input-placeholder-color: grey;

  /* Form input field focus states */
  --form-input-outline-width--focus: 1px;
  --form-input-outline-color--focus: dodgerblue;

  /* Form input field error states */
  --form-input-border-color--error: red;
  --form-input-outline-color--error: red;

  /* Form input error text */
  --form-input-error-color: red;
  --form-input-error-font-weight: 500;
  --form-input-error-font-size: 14px;
  --form-input-error-spacing-top: 4px;

  /* Form input host */
  --form-input-spacing: 24px;

  /* -- Custom fields -- */

  /* Select */
  --form-input-select-icon-color: var(--form-input-border-color);
  --form-input-select-icon-spacing: var(--form-input-horizontal-padding);
  
  /* Checkbox */
  --form-input-checkbox-size: 24px;
  --form-input-checkbox-spacing: 10px;
  --form-input-checkbox-label-font-size: var(--form-input-label-font-size);
  --form-input-checkbox-check-color: var(--form-input-outline-color--focus);
  --form-input-checkbox-inner-size: 12px;
  --form-input-checkbox-label-font-size: 12px;
  --form-input-checkbox-inner-radius: 3px;
  
  /* Radio */
  --form-input-radio-size: 22px;
  --form-input-radio-selected-size: 11px;
  --form-input-radio-spacing: 10px;
  --form-input-radio-label-spacing: 10px;
  --form-input-radio-border: 1px solid var(--form-input-border-color);
  --form-input-radio-label-font-size: var(--form-input-checkbox-label-font-size);
  --form-input-radio-check-color: var(--form-input-checkbox-check-color);

  /* Textarea */
  --form-input-textarea-line-height: 1.4;

  /* Multi select */
  --form-input-multi-select-option-background-color: var(--form-input-outline-color--focus);
  --form-input-multi-select-option-text-color: white;
  --form-input-multi-select-option-font-size: 14px;
  --form-input-multi-select-option-vertical-padding: 6px;
  --form-input-multi-select-option-horizontal-padding: 8px;
  --form-input-multi-select-option-padding: var(--form-input-multi-select-option-vertical-padding) var(--form-input-multi-select-option-horizontal-padding);
  --form-input-multi-select-option-radius: var(--form-input-border-radius);
  --form-input-multi-select-dropdown-border: 1px solid #ddd;
  --form-input-multi-select-focus-background: #{rgba(black, 0.05)};
  --form-input-multi-select-dropdown-font-size: 16px;
  --form-input-multi-select-dropdown-option-padding: 12px;
```

The form styles have been designed specifically to try and reduce the amount of customisation that you will have to do. They have also been created with accessibility in mind.

Each form input container will by default have 3 CSS classes assigned to it, `form-input-host`, `form-input-host-${formInputType}`, and `form-input-host-${formInputName}` to allow for easy external styling across the whole app. An example of this is the `--form-input-spacing` variable which dictates the default spacing between form input components when displayed next to each other.

## Creating custom form components

Coming soon