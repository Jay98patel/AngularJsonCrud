import { TestBed } from '@angular/core/testing';

import { SignUpServicesService } from './sign-up-services.service';

describe('SignUpServicesService', () => {
  let service: SignUpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
