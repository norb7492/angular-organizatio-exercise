import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewTaskComponent } from './create-new-task.component';
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from '@angular/material/button';
import { FormFirstTaskComponent } from './forms/form-first-task/form-first-task.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateNewTaskComponent,
    FormFirstTaskComponent
  ],
  exports: [
    CreateNewTaskComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreateNewTaskModule { }
