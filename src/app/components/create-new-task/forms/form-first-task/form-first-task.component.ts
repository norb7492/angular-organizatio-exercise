import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-first-task',
  templateUrl: './form-first-task.component.html',
  styleUrls: ['./form-first-task.component.scss']
})
export class FormFirstTaskComponent implements OnInit {
  exampleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  public ngOnInit(): void {
    this.exampleForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.exampleForm.valid) {
    }
  }

}
