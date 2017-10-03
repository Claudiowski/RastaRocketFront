import { TestBed, inject } from '@angular/core/testing';

import { ConsultNeedService } from './consult-need.service';

describe('ConsultNeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultNeedService]
    });
  });

  it('should be created', inject([ConsultNeedService], (service: ConsultNeedService) => {
    expect(service).toBeTruthy();
  }));
});
