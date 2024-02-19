import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { InsuranceCarrier } from '../../common/interfaces/insurance-carrier';
import { InsuranceCarrierService } from '../../services/insurance-carrier/insurance-carrier.service';

@Component({
  selector: 'app-insurance-carrier-form',
  templateUrl: './insurance-carrier-form.component.html',
  styleUrls: ['./insurance-carrier-form.component.scss'],
})
export class InsuranceCarrierFormComponent implements OnInit {
  @Input() insuranceCarrier?: InsuranceCarrier;
  @Output() submitted = new EventEmitter();

  insuranceCarrierForm: FormGroup = new FormGroup({});

  constructor(private insuranceCarrierService: InsuranceCarrierService) {}

  ngOnInit() {
    this.insuranceCarrierForm = new FormGroup({
      name: new FormControl(
        this.insuranceCarrier?.name || '',
        Validators.required
      ),
      description: new FormControl(
        this.insuranceCarrier?.description || '',
        Validators.required
      ),
      logo: new FormControl(this.insuranceCarrier?.logo || ''),
    });
  }

  saveInsuranceCarrier() {
    this.submitted.emit();

    if (this.insuranceCarrier) {
      this.insuranceCarrierService
        .editInsuranceCarrier(
          this.insuranceCarrier.id,
          this.insuranceCarrierForm.value
        )
        .subscribe();

      return;
    }

    this.insuranceCarrierService
      .saveNewInsuranceCarrier(this.insuranceCarrierForm.value)
      .subscribe();
  }
}
