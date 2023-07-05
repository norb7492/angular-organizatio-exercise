import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CreateNewTaskService } from '../services/create-new-task.service';
import { Observable } from 'rxjs';
import { IFirstTaskFormInterface } from '../interfaces/first-task-form.interface';
import { ITaskDetailsInterface } from '../interfaces/task-details.interface';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDataComponent implements OnChanges {
  @Input() currentStep: number = 0;
  public firstTaskState$: Observable<IFirstTaskFormInterface> = new Observable<IFirstTaskFormInterface>();
  public taskDetailsState$: Observable<ITaskDetailsInterface> = new Observable<ITaskDetailsInterface>();

  constructor(private createNewTaskService: CreateNewTaskService) {}
  public ngOnChanges(): void {
      if (this.currentStep === 2) {
        this.firstTaskState$ = this.createNewTaskService.getFirstTaskStateStream$();
        this. taskDetailsState$ = this.createNewTaskService.getTaskDetailsStateStream$()
      }
  }
}
