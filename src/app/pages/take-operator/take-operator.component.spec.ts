import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOperatorComponent } from './take-operator.component';

describe('TakeOperatorComponent', () => {
  let component: TakeOperatorComponent;
  let fixture: ComponentFixture<TakeOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeOperatorComponent]
    });
    fixture = TestBed.createComponent(TakeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
