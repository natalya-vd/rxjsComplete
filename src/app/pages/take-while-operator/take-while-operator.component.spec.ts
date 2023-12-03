import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeWhileOperatorComponent } from './take-while-operator.component';

describe('TakeWhileOperatorComponent', () => {
  let component: TakeWhileOperatorComponent;
  let fixture: ComponentFixture<TakeWhileOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeWhileOperatorComponent]
    });
    fixture = TestBed.createComponent(TakeWhileOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
