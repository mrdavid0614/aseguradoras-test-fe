import { Component, OnDestroy, OnInit } from '@angular/core';
import { InsuranceCarrierService } from '../../services/insurance-carrier/insurance-carrier.service';
import { InsuranceCarrier } from '../../common/interfaces/insurance-carrier';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  insuranceCarriers: InsuranceCarrier[] = [];
  insuranceCarriersSubject = new Subject();

  constructor(private insuranceCarrierService: InsuranceCarrierService) {}

  ngOnInit() {
    this.insuranceCarrierService.getAllInsuranceCarriers();
    this.insuranceCarrierService.insuranceCarriers
      .pipe(takeUntil(this.insuranceCarriersSubject))
      .subscribe((data) => (this.insuranceCarriers = data));
  }

  ngOnDestroy() {
    this.insuranceCarriersSubject.next(null);
    this.insuranceCarriersSubject.complete();
  }
}
