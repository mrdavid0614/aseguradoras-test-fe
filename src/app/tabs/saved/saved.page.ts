import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InsuranceCarrierService } from '../../services/insurance-carrier/insurance-carrier.service';
import { InsuranceCarrier } from '../../common/interfaces/insurance-carrier';
import { IonModal } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal: IonModal = {} as IonModal;
  insuranceCarriers: InsuranceCarrier[] = [];
  insuranceCarriersSubject = new Subject();

  isCreationModalOpen = false;

  constructor(private insuranceCarrierService: InsuranceCarrierService) {}

  ngOnInit() {
    this.insuranceCarrierService.getAllInsuranceCarriers();
    this.insuranceCarrierService.insuranceCarriers
      .pipe(takeUntil(this.insuranceCarriersSubject))
      .subscribe((data) => (this.insuranceCarriers = data));
  }

  closeModal() {
    this.modal.dismiss();
    this.isCreationModalOpen = false;
  }

  ngOnDestroy(): void {
    this.insuranceCarriersSubject.next(null);
    this.insuranceCarriersSubject.complete();
  }
}
