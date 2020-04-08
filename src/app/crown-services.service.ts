import { Injectable } from '@angular/core';
import {CrownServicesInterface} from './crown-services.interface';
import {CROWN_SERVICES} from './mock-crown-services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrownServicesService {

  constructor() { }
  getCrownServices(): Observable<CrownServicesInterface[]> {
    return of(CROWN_SERVICES);
  }
}
