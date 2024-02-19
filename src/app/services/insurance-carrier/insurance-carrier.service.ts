import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { InsuranceCarrier } from '../../common/interfaces/insurance-carrier';
import { ApiResponse } from '../../common/interfaces/api-response';
import { InsuranceCarrierDto } from '../../common/types/insurance-carrier-dto';
import { BehaviorSubject, shareReplay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InsuranceCarrierService {
  private BASE_API_URL = environment.baseApiUrl;
  insuranceCarriers = new BehaviorSubject<InsuranceCarrier[]>([]);

  constructor(private httpClient: HttpClient) {}

  getAllInsuranceCarriers() {
    this.httpClient
      .get<ApiResponse<InsuranceCarrier[]>>(
        `${this.BASE_API_URL}/insurance-carrier`
      )
      .pipe(take(1))
      .subscribe((res) => {
        this.insuranceCarriers.next(res.data || []);
      });
  }

  saveNewInsuranceCarrier(dto: InsuranceCarrierDto) {
    return this.httpClient
      .post(`${this.BASE_API_URL}/insurance-carrier`, dto)
      .pipe(
        take(1),
        tap(() => {
          this.getAllInsuranceCarriers();
        })
      );
  }

  editInsuranceCarrier(id: number, dto: InsuranceCarrierDto) {
    return this.httpClient
      .patch(`${this.BASE_API_URL}/insurance-carrier/${id}`, dto)
      .pipe(
        take(1),
        tap(() => {
          this.getAllInsuranceCarriers();
        })
      );
  }

  deleteInsuranceCarrier(id: number) {
    return this.httpClient
      .delete(`${this.BASE_API_URL}/insurance-carrier/${id}`)
      .pipe(
        take(1),
        tap(() => {
          this.getAllInsuranceCarriers();
        })
      );
  }
}
