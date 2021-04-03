import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pow-custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss']
})
export class CustomSelectOptionComponent {
  @Input()
  public label: string;

  @Input()
  public value: any;

  @Input()
  public isSelected: boolean;

  @Output()
  public selected = new EventEmitter<any>();

  public onSelect(): void {
    this.selected.emit(this.value);
  }
}
