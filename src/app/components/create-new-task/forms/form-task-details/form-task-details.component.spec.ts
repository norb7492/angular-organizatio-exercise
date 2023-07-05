import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskDetailsComponent } from './form-task-details.component';

describe('FormTaskDetailsComponent', () => {
  let component: FormTaskDetailsComponent;
  let fixture: ComponentFixture<FormTaskDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTaskDetailsComponent]
    });
    fixture = TestBed.createComponent(FormTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
