import { TestBed, inject } from '@angular/core/testing';

import { AddNeedDescriptionService } from './add-need-description.service';

describe('AddNeedDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNeedDescriptionService]
    });
  });

  it('should be created', inject([AddNeedDescriptionService], (service: AddNeedDescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
