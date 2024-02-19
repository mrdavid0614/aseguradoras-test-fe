import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPageRoutingModule } from './saved-routing.module';

import { SavedPage } from './saved.page';
import { InsuranceCarrierCardComponent } from '../../components/insurance-carrier-card/insurance-carrier-card.component';
import { InsuranceCarrierFormComponent } from '../../components/insurance-carrier-form/insurance-carrier-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SavedPage,
    InsuranceCarrierCardComponent,
    InsuranceCarrierFormComponent,
  ],
})
export class SavedPageModule {}
