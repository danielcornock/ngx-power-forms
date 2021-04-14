import { FormInputField } from '../instances';

export interface FormInputHooks {
  /**
   * 
   * @param field The form input field in question - can access methods such as setDisabled
   * @description Ran on initialisation of each form component
   * @example If you want to set the disabled state of this field depending on the value of another field, you can initialise that here.
   * ```ts
   * export class AppComponent implements OnInit {
   *   public form: FormContainer;
   *
   *   constructor(private formFactory: FormFactory){}
   *
   *  ngOnInit(): void {
   *    this.form = this.formFactory.create({
   *      fields: [
   *        {
   *          name: 'resultTextField',
   *          label: 'This is disabled when the previous checkbox is not checked',
   *          type: FormInputType.TEXT,
   *          hooks: {
   *            onInit: (field) => {
   *              const decidingCheckbox = this.form.getField('decidingCheckbox');
   * 
   *              if (decidingCheckbox) {
   *                decidingCheckbox.value$.pipe(startWith(decidingCheckbox.value)).subscribe((val) => {
   *                  field.setDisabled(!val);
   *                });
   *              }
   *            }
   *          }
   *        }
   *      ]
   *    });
   *  }
   * }
   * ```
   */
  onInit?(field: FormInputField): void;
}
