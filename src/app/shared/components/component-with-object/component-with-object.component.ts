import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IObjectDto} from "./object-dto.interface";

@Component({
  selector: 'app-component-with-object',
  templateUrl: './component-with-object.component.html',
  styleUrls: ['./component-with-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentWithObjectComponent {
  @Input() public objectDto: IObjectDto = {
    id: '',
    name: '',
    age: 0
  }
}
