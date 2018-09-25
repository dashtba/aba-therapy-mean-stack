import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandsComponent } from './mands.component';

describe('MandsComponent', () => {
  let component: MandsComponent;
  let fixture: ComponentFixture<MandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
