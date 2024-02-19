import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InsuranceCarrier } from '../../common/interfaces/insurance-carrier';
import { InsuranceCarrierService } from '../../services/insurance-carrier/insurance-carrier.service';
import { first } from 'rxjs';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-insurance-carrier-card',
  templateUrl: './insurance-carrier-card.component.html',
  styleUrls: ['./insurance-carrier-card.component.scss'],
})
export class InsuranceCarrierCardComponent {
  @Input() insuranceCarrier: InsuranceCarrier = {} as InsuranceCarrier;
  @ViewChild(IonModal) modal?: IonModal;

  constructor(private insuranceCarrierService: InsuranceCarrierService) {}

  closeModal() {
    this.modal?.dismiss();
  }

  deleteInsuranceCarrier() {
    if (confirm('¿Estás seguro de que quieres eliminar esta aseguradora?')) {
      this.insuranceCarrierService
        .deleteInsuranceCarrier(this.insuranceCarrier.id)
        .subscribe();
    }
  }
}
