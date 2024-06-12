import { SortOrder } from "../../util/SortOrder";

export type CostOrderByInput = {
  amount?: SortOrder;
  apartmentId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
