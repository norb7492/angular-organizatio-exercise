import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFirstTaskComponent } from './form-first-task.component';

describe('FormFirstTaskComponent', () => {
  let component: FormFirstTaskComponent;
  let fixture: ComponentFixture<FormFirstTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFirstTaskComponent]
    });
    fixture = TestBed.createComponent(FormFirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
