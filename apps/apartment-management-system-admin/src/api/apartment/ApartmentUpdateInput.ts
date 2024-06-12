import { CostUpdateManyWithoutApartmentsInput } from "./CostUpdateManyWithoutApartmentsInput";
import { PaymentUpdateManyWithoutApartmentsInput } from "./PaymentUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  costs?: CostUpdateManyWithoutApartmentsInput;
  payments?: PaymentUpdateManyWithoutApartmentsInput;
  unitNumber?: number | null;
};
