import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedClientComponent } from './add-need-client.component';

describe('AddNeedClientComponent', () => {
  let component: AddNeedClientComponent;
  let fixture: ComponentFixture<AddNeedClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeedClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
