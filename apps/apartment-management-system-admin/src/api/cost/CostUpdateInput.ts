import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type CostUpdateInput = {
  amount?: number | null;
  apartment?: ApartmentWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
};
