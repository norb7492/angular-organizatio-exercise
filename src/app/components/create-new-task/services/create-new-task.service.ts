import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FirstTaskFormInterface} from "../interfaces/first-task-form.interface";

@Injectable({
  providedIn: 'root'
})
export class CreateNewTaskService {

  private firstTaskState: BehaviorSubject<FirstTaskFormInterface> = new BehaviorSubject<FirstTaskFormInterface>({
    taskName: '',
    goal: ''
  });

  constructor() { }

  public get firstTaskStateValue(): FirstTaskFormInterface {
    return this.firstTaskState.getValue();
  }

  public set firstTaskStateValue(value: FirstTaskFormInterface) {
    this.firstTaskState.next(value);
  }
}
