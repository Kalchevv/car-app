import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text: string = 'Submit';
  @Input()
  bgColor = 'red';
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = '1.3';
  @Input()
  widthRem = 12;
  @Output()
  onClick = new EventEmitter();
}
