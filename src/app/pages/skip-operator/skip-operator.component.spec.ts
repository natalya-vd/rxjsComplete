import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipOperatorComponent } from './skip-operator.component';

describe('SkipOperatorComponent', () => {
  let component: SkipOperatorComponent;
  let fixture: ComponentFixture<SkipOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkipOperatorComponent]
    });
    fixture = TestBed.createComponent(SkipOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
