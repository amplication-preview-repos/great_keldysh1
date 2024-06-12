import { Apartment } from "../apartment/Apartment";

export type Payment = {
  amount: number | null;
  apartment?: Apartment | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
