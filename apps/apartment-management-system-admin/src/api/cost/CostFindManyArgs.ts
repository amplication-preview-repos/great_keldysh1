import { CostWhereInput } from "./CostWhereInput";
import { CostOrderByInput } from "./CostOrderByInput";

export type CostFindManyArgs = {
  where?: CostWhereInput;
  orderBy?: Array<CostOrderByInput>;
  skip?: number;
  take?: number;
};
