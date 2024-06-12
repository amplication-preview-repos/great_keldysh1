import { CostListRelationFilter } from "../cost/CostListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ApartmentWhereInput = {
  costs?: CostListRelationFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  unitNumber?: IntNullableFilter;
};
