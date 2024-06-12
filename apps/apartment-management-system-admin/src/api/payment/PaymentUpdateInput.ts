import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  apartment?: ApartmentWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
};
