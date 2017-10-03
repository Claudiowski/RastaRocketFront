import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedDescriptionComponent } from './add-need-description.component';

describe('AddNeedDescriptionComponent', () => {
  let component: AddNeedDescriptionComponent;
  let fixture: ComponentFixture<AddNeedDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNeedDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
