import { TestBed, inject } from '@angular/core/testing';

import { AddNeedService } from './add-need.service';

describe('AddNeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNeedService]
    });
  });

  it('should be created', inject([AddNeedService], (service: AddNeedService) => {
    expect(service).toBeTruthy();
  }));
});
