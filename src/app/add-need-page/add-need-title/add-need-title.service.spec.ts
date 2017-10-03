import { TestBed, inject } from '@angular/core/testing';

import { AddNeedTitleService } from './add-need-title.service';

describe('AddNeedTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNeedTitleService]
    });
  });

  it('should be created', inject([AddNeedTitleService], (service: AddNeedTitleService) => {
    expect(service).toBeTruthy();
  }));
});
