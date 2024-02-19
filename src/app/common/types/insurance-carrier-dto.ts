import { InsuranceCarrier } from '../interfaces/insurance-carrier';

export type InsuranceCarrierDto = Omit<InsuranceCarrier, 'id'>;
