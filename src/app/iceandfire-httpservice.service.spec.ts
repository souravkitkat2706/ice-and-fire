import { TestBed, inject } from '@angular/core/testing';

import { IceandfireHttpserviceService } from './iceandfire-httpservice.service';

describe('IceandfireHttpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IceandfireHttpserviceService]
    });
  });

  it('should be created', inject([IceandfireHttpserviceService], (service: IceandfireHttpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
