import { TestBed, inject } from '@angular/core/testing';

import { AddNeedClientService } from './add-need-client.service';

describe('AddNeedClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNeedClientService]
    });
  });

  it('should be created', inject([AddNeedClientService], (service: AddNeedClientService) => {
    expect(service).toBeTruthy();
  }));
});
