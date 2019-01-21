import { TestBed, inject } from '@angular/core/testing';

import { FileIoServiceService } from './file-io-service.service';

describe('FileIoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileIoServiceService]
    });
  });

  it('should be created', inject([FileIoServiceService], (service: FileIoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
