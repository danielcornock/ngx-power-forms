import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { CustomSelectOptionComponent } from '../../components';
import { FormInputCustomSelectCustomConfig, SelectOption } from '../../interfaces';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-custom-select',
  templateUrl: './form-input-custom-select.component.html',
  styleUrls: ['./form-input-custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputCustomSelectComponent
  extends FormInputComponent<FormInputCustomSelectCustomConfig>
  implements AfterViewInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  public container: ViewContainerRef;

  protected components: ComponentRef<CustomSelectOptionComponent>[] = [];

  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  public ngAfterViewInit(): void {
    const factory = this.createComponentFactory();

    if (this.formInputField.customConfig.options instanceof Observable) {
      throw new Error('Observables not supported for this form input type yet.');
    }

    this.formInputField.customConfig.options.forEach((option: any) => {
      const componentRef  = this.container.createComponent(factory);

      componentRef.instance.label = option.label;
      componentRef.instance.value = option.value;

      this.setIsSelected(componentRef, option);

      componentRef.instance.selected.subscribe((value: any) => this.onSelect(value));
      componentRef.changeDetectorRef.detectChanges();

      this.components.push(componentRef);
    });
  }

  public ngOnDestroy(): void {
    this.components.forEach((component) => {
      component.destroy();
    });
  }

  protected onSelect(value: any): void {
    if (this.formInputField.isDisabled) {
      return;
    }

    this.formInputField.setValue(value);

    this.components.forEach((component) => {
      if (value === component.instance.value) {
        component.instance.isSelected = true;
      } else {
        component.instance.isSelected = false;
      }

      component.changeDetectorRef.detectChanges();
    });
  }

  protected setIsSelected(componentRef: ComponentRef<CustomSelectOptionComponent>, option: SelectOption): void {
    componentRef.instance.isSelected = option.value === this.formInputField.value;
  }

  private createComponentFactory(): ComponentFactory<CustomSelectOptionComponent> {
    return this.resolver.resolveComponentFactory(
      this.formInputField.customConfig?.component ?? CustomSelectOptionComponent
    );
  }
}
