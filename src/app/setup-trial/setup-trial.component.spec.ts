import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTrialComponent } from './setup-trial.component';

describe('SetupTrialComponent', () => {
  let component: SetupTrialComponent;
  let fixture: ComponentFixture<SetupTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
