import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { CustomSelectOptionComponent } from '../../components';
import { SelectOption } from '../../interfaces';
import { FormInputCustomSelectComponent } from '../form-input-custom-select/form-input-custom-select.component';

@Component({
  selector: 'pow-form-input-custom-multi-select',
  templateUrl: './form-input-custom-multi-select.component.html',
  styleUrls: ['./form-input-custom-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputCustomMultiSelectComponent extends FormInputCustomSelectComponent {
  constructor(resolver: ComponentFactoryResolver) {
    super(resolver);
  }

  protected setIsSelected(componentRef: ComponentRef<CustomSelectOptionComponent>, option: SelectOption): void {
    componentRef.instance.isSelected = this.formInputField.value.includes(option.value);
  }

  protected onSelect(value: any): void {
    if (this.formInputField.value.includes(value)) {
      const newValue = this.formInputField.value.filter((selected: any) => selected !== value);
      this.formInputField.setValue(newValue);
    } else {
      this.formInputField.setValue([
        ...this.formInputField.value,
        value
      ]);
    }

    this.components.forEach((component) => {
      if (this.formInputField.value.includes(component.instance.value)) {
        component.instance.isSelected = true;
      } else {
        component.instance.isSelected = false;
      }

      component.changeDetectorRef.detectChanges();
    });
  }
}
