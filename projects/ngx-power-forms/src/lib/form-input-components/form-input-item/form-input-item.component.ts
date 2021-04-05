import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef, HostBinding, Inject, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormInputType } from '../../constants';
import { FormInputField } from '../../instances';
import { CustomInputComponents, PowerFormsModuleCustomComponents } from '../../providers/custom-components.provider';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'pow-form-input-item',
  templateUrl: './form-input-item.component.html',
  styleUrls: ['./form-input-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  public formInputField: FormInputField;

  @ViewChild('container', { read: ViewContainerRef })
  public container: ViewContainerRef;

  @HostBinding('class')
  public class = 'form-input-host';

  public readonly formInputType = FormInputType;

  public isCustomComponent: boolean;
  private generatedComponent?: ComponentRef<FormInputComponent>;

  constructor(
    @Inject(CustomInputComponents)
    private customComponents: PowerFormsModuleCustomComponents,
    private resolver: ComponentFactoryResolver
  ) {}

  public ngOnInit(): void {
    this.isCustomComponent = !(Object.values(this.formInputType) as string[]).includes(this.formInputField.type);
  }

  public ngAfterViewInit(): void {
    if (this.isCustomComponent) {
        this.getCustomComponent(this.formInputField.type);
    }
  }

  public ngOnDestroy(): void {
    if (this.generatedComponent) {
      this.generatedComponent.destroy();
    }
  }

  private getCustomComponent(key: string): void {
    const componentConstructor = this.customComponents[key];

    if (!componentConstructor) {
      throw new Error('Custom component cannot be found. Make sure that the key you are using matches a custom component that you have set in your module.');
    }

    const factory = this.resolver.resolveComponentFactory(
      componentConstructor
    );

    const componentRef = this.container.createComponent(factory);
    componentRef.instance.formInputField = this.formInputField;
    componentRef.changeDetectorRef.detectChanges();
  }
}
