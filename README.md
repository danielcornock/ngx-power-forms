# Ngx Power Forms

A library designed to abstract away the repetitive elements of building a form. Takes away a small amount of the flexibility provided by Angular forms, but saves you time in the process. The library is built on top of Angular reactive forms and makes extensive use of observables, to allow for `onPush` change detection.

Demo is available [here](https://ngx-power-forms.netlify.app/).

## Installation and setup

To install the library, use

```
npm i ngx-power-forms
```

Once installed, you should add the `NgxPowerFormsModule` using `forRoot` to a core module. Within `forRoot` you can provide an object to further customise things such as form validation messages, custom components and miscellanious settings.

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

To simplify this even more, we've also added a `pow-form` component, where you simply pass in the `formContainer` instance as an input and then embed your action buttons inside the element.

> If one of your buttons is of type 'submit', the submission of the form will be automatic and the function that to passed to the `onSave` field of the config object will be called.

```html
<pow-form [formContainer]="form">
  <input type="submit" value="Submit form">
</pow-form>
```

## Typings

Typings vary between each form input type. By assigning a value to the `type` field using the `FormInputType` enum, TypeScript is able to determine the intellisense needed, for example requiring `options` in the `customConfig` for select and radio fields.


## Customisability

As well as being able to override the classes yourself, the project extensively uses CSS variables. This aims to make the forms as customisable as possible without having to manually override CSS classes, with `!important` sprinkled everywhere.

```scss
  /* Core */
  --form-input-feature-color: dodgerblue;
  --form-input-error-color: red;

  /* Form input label */
  --form-input-label-font-size: 14px;
  --form-input-label-margin-bottom: 8px;
  --form-input-label-font-weight: 500;
  --form-input-label-letter-spacing: 0.5px;
  --form-input-label-color: grey;

  /* Form input label error state */
  --form-input-label-color--error: var(--form-input-error-color);

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
  --form-input-outline-color--focus: var(--form-input-feature-color);

  /* Form input field error states */
  --form-input-border-color--error: var(--form-input-error-color);
  --form-input-outline-color--error: var(--form-input-error-color);

  /* Form input error text */
  --form-input-error-font-weight: 400;
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
  --form-input-checkbox-check-color: var(--form-input-feature-color);
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
  --form-input-multi-select-option-background-color: var(--form-input-feature-color);
  --form-input-multi-select-option-text-color: white;
  --form-input-multi-select-option-font-size: 14px;
  --form-input-multi-select-option-vertical-padding: 5px;
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

## Custom option components

Some components, such as `FormInputCustomSelect` and `FormInputCustomMultiSelect` can have a component passed in to the custom config when creating the input. This component must extend `CustomSelectOptionComponent`, and then you are free to create a new template and styles to make the custom select option appear however you want.

Create a clickable element that calls the `onSelect` function in the callback, and use the `isSelected` input to style your custom component when it has been selected.

If you want to customise the container of the custom select options, simply target `form-input-custom-select`, or `form-input-custom-multi-select` respectively.
## Creating custom form components

To integrate your own component in to the framework, there are a few things that you need to set up. The first thing is to extend the libraries types to allow you to define a custom config interface for your component.

For this example, we will be adding our own 'range' component.

It is recommended to create a new directory, whether it be in your shared folder or as a new module, named `forms`.

### Extending the types

First, lets create a new enum to hold our new form input type.

```ts
export enum FormInputCustomType {
  RANGE = 'range'
};
```

Then, create a new interface file. We've called ours `form-input-range-config.interface.ts`.

In this file, we want to create two interfaces.

```ts
export interface FormInputRangeConfig extends FormInputBaseConfig {
  type: FormInputCustomType.RANGE;
  customConfig: FormInputRangeCustomConfig;
  value: number;
}

export interface FormInputRangeCustomConfig {
  min: number;
  max: number;
  step: number;
}
```

The first interface defines the object that we will need to pass in to the arguments to our form input creation method. In here you should extend `FormInputBaseConfig`, and override the type with the value of the enum that we have just created. We've also overriden the `value` field, as we want to make it require a `number`.

Finally, if our new component will have any extra config that is not part of a standard input, we want to create a new interface below it and assign that interface to the `customConfig` field on the primary config interface.

For this example we will require a `min`, `max` and `step` fields in order to configure our slider.

Finally, we need to integrate this interface with the library. Create a new types file in this directory called `power-forms.d.ts`, and paste the following in to the file.

```ts
declare module 'ngx-power-forms' {
  interface FormInputConfigMap {
    [FormInputCustomType.RANGE]: FormInputRangeConfig;
  }
}
```

Once this is done, when you are creating a new input using the `FormInputFactory` or `FormFactory`, if you try to create an input with a `type` of `FormInputCustomField.RANGE`, the intellisense will match the interface to the one you previously created, and typescript will make sure that you provide the correct parameters.

### Creating the component

To create a custom component that can be integrated in to the framework, first generate an Angular component using the CLI, and extend this component from `FormInputComponent`. You should pass your `customConfig` interface to the extended `FormInputComponent` as a generic, if your component has a `customConfig` object.

```ts
@Component({
  selector: 'app-form-input-range',
  templateUrl: './form-input-range.component.html',
  styleUrls: ['./form-input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputRangeComponent extends FormInputComponent<FormInputRangeCustomConfig> {}
```

You are free to build the template however you wish, however it is recommended to try to stick to the following structure for consistency. The example below is an implementation of our custom built slider.

```html
<div class="form-input-container">
  <pow-form-input-label [formInputField]="formInputField"></pow-form-input-label>

  <input class="form-input-range"
    type="range"
    [name]="formInputField.name"
    [id]="formInputField.name"
    [formControl]="formInputField.control"
    [min]="formInputField.customConfig.min"
    [max]="formInputField.customConfig.max"
    [step]="formInputField.customConfig.step">

  <pow-form-input-error [errors]="formInputField.errors$ | async"></pow-form-input-error>
</div>
```

As you can see in this example, we have referenced fields inside `customConfig`, and the Angular language service knows that `min`, `max` and `step` are all a part of the `customConfig` object for this component because of the generic that we passed through to the base class.

If your component follows the normal style of an input (i.e. looks like a text box), you should apply the `form-input` class to the input. This will ensure that the styles are consistent with the rest of the inputs. In this case however, the slider field does not follow the usual structure, so we have omitted that CSS class.

### Integrating with `pow-form-input-item`

Finally, if we want our custom component to be able to be integrated with the `pow-form` or `pow-form-input-item` components, we need to pass our component in to our library using the `forRoot` method on the library module.

```ts
@NgModule({
  declarations: [
    AppComponent,
    FormInputRangeComponent
  ],
  imports: [
    BrowserModule,
    NgxPowerFormsModule.forRoot({
      CustomInputComponents: {
        [FormInputCustomType.RANGE]: FormInputRangeComponent
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```