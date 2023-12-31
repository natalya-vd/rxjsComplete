import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsBasicsComponent } from './operators-basics.component';

describe('OperatorsBasicsComponent', () => {
  let component: OperatorsBasicsComponent;
  let fixture: ComponentFixture<OperatorsBasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorsBasicsComponent]
    });
    fixture = TestBed.createComponent(OperatorsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
