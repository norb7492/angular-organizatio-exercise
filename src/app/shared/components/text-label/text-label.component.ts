import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-label',
  templateUrl: './text-label.component.html',
  styleUrls: ['./text-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextLabelComponent {
  @Input() public headerText: string = '';
}
