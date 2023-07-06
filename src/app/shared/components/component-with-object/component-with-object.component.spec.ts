import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithObjectComponent } from './component-with-object.component';

describe('ComponentWithObjectComponent', () => {
  let component: ComponentWithObjectComponent;
  let fixture: ComponentFixture<ComponentWithObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentWithObjectComponent]
    });
    fixture = TestBed.createComponent(ComponentWithObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
