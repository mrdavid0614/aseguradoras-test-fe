import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { InsuranceCarrierService } from '../../services/insurance-carrier/insurance-carrier.service';
import { InsuranceCarrierMiniComponent } from '../../components/insurance-carrier-mini/insurance-carrier-mini.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, InsuranceCarrierMiniComponent],
  providers: [InsuranceCarrierService],
})
export class HomePageModule {}
