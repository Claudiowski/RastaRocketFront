import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedTitleComponent } from './add-need-title.component';

describe('AddNeedTitleComponent', () => {
  let component: AddNeedTitleComponent;
  let fixture: ComponentFixture<AddNeedTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeedTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
