import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableComponent } from './create-observable.component';

describe('CreateObservableComponent', () => {
  let component: CreateObservableComponent;
  let fixture: ComponentFixture<CreateObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateObservableComponent]
    });
    fixture = TestBed.createComponent(CreateObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
