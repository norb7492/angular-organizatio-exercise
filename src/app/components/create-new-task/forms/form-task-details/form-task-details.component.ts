import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateNewTaskService } from '../../services/create-new-task.service';
import { IFormsContractInterface } from '../forms-contract.interface';

@Component({
  selector: 'app-form-task-details',
  templateUrl: './form-task-details.component.html',
  styleUrls: ['./form-task-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTaskDetailsComponent implements OnInit, IFormsContractInterface {
  public taskDetailsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private createNewTaskService: CreateNewTaskService) { }

  public ngOnInit(): void {
    this.initiateForm();
  }

  public initiateForm(): void {
    this.taskDetailsForm = this.formBuilder.group({
      details: ['', Validators.required],
      estimation: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.taskDetailsForm.valid) {
      const { details, estimation } = this.taskDetailsForm.value;

      this.createNewTaskService.taskDetailsStateValue = {
        details,
        estimation
      };
    }
  }

}
