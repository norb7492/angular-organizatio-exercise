import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { IFirstTaskFormInterface } from '../interfaces/first-task-form.interface';
import { ITaskDetailsInterface } from '../interfaces/task-details.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateNewTaskService {

  private _firstTaskState: BehaviorSubject<IFirstTaskFormInterface> = new BehaviorSubject<IFirstTaskFormInterface>({
    taskName: '',
    goal: ''
  });

  private _taskDetailsState: BehaviorSubject<ITaskDetailsInterface> = new BehaviorSubject<ITaskDetailsInterface>({
    details: '',
    estimation: ''
  })

  constructor() { }

  public getFirstTaskStateStream$(): Observable<IFirstTaskFormInterface> {
    return this._firstTaskState;
  }

  public getTaskDetailsStateStream$(): Observable<ITaskDetailsInterface> {
    return this._taskDetailsState;
  }

  public get firstTaskStateValue(): IFirstTaskFormInterface {
    return this._firstTaskState.getValue();
  }

  public set firstTaskStateValue(value: IFirstTaskFormInterface) {
    this._firstTaskState.next(value);
  }

  public get taskDetailsStateValue(): ITaskDetailsInterface {
    return this._taskDetailsState.getValue();
  }

  public set taskDetailsStateValue(value: ITaskDetailsInterface) {
    this._taskDetailsState.next(value);
  }
}
