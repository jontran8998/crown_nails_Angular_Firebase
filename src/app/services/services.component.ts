import { Component, OnInit } from '@angular/core';
import {CrownServicesService} from '../crown-services.service';
import {CrownServicesInterface} from '../crown-services.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  crownServices: CrownServicesInterface[];
  constructor(private crownServicesService: CrownServicesService) { }

  ngOnInit() {
    this.getCrownServices();
  }
  getCrownServices(): void {
   this.crownServicesService.getCrownServices()
    .subscribe(crownServices => this.crownServices = crownServices);
  }
}
