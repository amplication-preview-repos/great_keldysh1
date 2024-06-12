import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CostWhereInput = {
  amount?: FloatNullableFilter;
  apartment?: ApartmentWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
