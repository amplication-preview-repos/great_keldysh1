import { Cost } from "../cost/Cost";
import { Payment } from "../payment/Payment";

export type Apartment = {
  costs?: Array<Cost>;
  createdAt: Date;
  id: string;
  payments?: Array<Payment>;
  unitNumber: number | null;
  updatedAt: Date;
};
