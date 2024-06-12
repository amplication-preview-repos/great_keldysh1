import { CostCreateNestedManyWithoutApartmentsInput } from "./CostCreateNestedManyWithoutApartmentsInput";
import { PaymentCreateNestedManyWithoutApartmentsInput } from "./PaymentCreateNestedManyWithoutApartmentsInput";

export type ApartmentCreateInput = {
  costs?: CostCreateNestedManyWithoutApartmentsInput;
  payments?: PaymentCreateNestedManyWithoutApartmentsInput;
  unitNumber?: number | null;
};
