import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-carrier-mini',
  templateUrl: './insurance-carrier-mini.component.html',
  styleUrls: ['./insurance-carrier-mini.component.scss'],
})
export class InsuranceCarrierMiniComponent {
  @Input() imgSrc: string = '';

  constructor() {}
}
