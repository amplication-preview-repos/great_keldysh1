import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  apartment?: ApartmentWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
};
