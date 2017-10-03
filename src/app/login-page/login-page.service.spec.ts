import { TestBed, inject } from '@angular/core/testing';

import { LoginPageService } from './login-page.service';

describe('LoginPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginPageService]
    });
  });

  it('should be created', inject([LoginPageService], (service: LoginPageService) => {
    expect(service).toBeTruthy();
  }));
});
