import { Cost as TCost } from "../api/cost/Cost";

export const COST_TITLE_FIELD = "id";

export const CostTitle = (record: TCost): string => {
  return record.id?.toString() || String(record.id);
};
