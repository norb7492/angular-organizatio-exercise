import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateNewTaskService } from '../../services/create-new-task.service';
import { IFormsContractInterface } from '../forms-contract.interface';

@Component({
  selector: 'app-form-first-task',
  templateUrl: './form-first-task.component.html',
  styleUrls: ['./form-first-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFirstTaskComponent implements OnInit, IFormsContractInterface {
  public firstTaskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private createNewTaskService: CreateNewTaskService) { }
  public ngOnInit(): void {
    this.initiateForm();
  }

  public initiateForm(): void {
    this.firstTaskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.firstTaskForm.valid) {
      const { taskName, goal } = this.firstTaskForm.value;

      this.createNewTaskService.firstTaskStateValue = {
        taskName,
        goal
      };
    }
  }

}
