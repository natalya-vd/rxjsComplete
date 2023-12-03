import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilOperatorComponent } from './take-until-operator.component';

describe('TakeUntilOperatorComponent', () => {
  let component: TakeUntilOperatorComponent;
  let fixture: ComponentFixture<TakeUntilOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeUntilOperatorComponent]
    });
    fixture = TestBed.createComponent(TakeUntilOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
