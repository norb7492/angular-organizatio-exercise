import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from '@angular/material/button';
import { FormFirstTaskComponent } from './create-new-task/forms/form-first-task/form-first-task.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTaskDetailsComponent } from './create-new-task/forms/form-task-details/form-task-details.component';
import { ShowDataComponent } from './create-new-task/show-data/show-data.component';
import { ExamplesComponent } from './examples/examples.component';



@NgModule({
  declarations: [
    CreateNewTaskComponent,
    FormFirstTaskComponent,
    FormTaskDetailsComponent,
    ShowDataComponent,
    ExamplesComponent
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
export class ComponentsModule { }
