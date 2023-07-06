import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IObjectDto} from "../../shared/components/component-with-object/object-dto.interface";

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent {
  public personDto: IObjectDto = {
    id: '1231SDAsda',
    name: 'Katia',
    age: 22
  }
}
