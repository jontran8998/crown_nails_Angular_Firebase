/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrownServicesService } from './crown-services.service';

describe('Service: CrownServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrownServicesService]
    });
  });

  it('should ...', inject([CrownServicesService], (service: CrownServicesService) => {
    expect(service).toBeTruthy();
  }));
});
