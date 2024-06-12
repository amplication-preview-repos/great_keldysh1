import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type CostCreateInput = {
  amount?: number | null;
  apartment?: ApartmentWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
};
