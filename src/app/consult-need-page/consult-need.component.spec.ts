import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNeedComponent } from './consult-need.component';

describe('ConsultNeedComponent', () => {
  let component: ConsultNeedComponent;
  let fixture: ComponentFixture<ConsultNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
