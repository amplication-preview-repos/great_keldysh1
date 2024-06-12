import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  apartment?: ApartmentWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
