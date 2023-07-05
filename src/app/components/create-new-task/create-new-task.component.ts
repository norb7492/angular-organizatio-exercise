import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewTaskComponent {

}
