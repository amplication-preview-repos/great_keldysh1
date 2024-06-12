import { Apartment as TApartment } from "../api/apartment/Apartment";

export const APARTMENT_TITLE_FIELD = "id";

export const ApartmentTitle = (record: TApartment): string => {
  return record.id?.toString() || String(record.id);
};
