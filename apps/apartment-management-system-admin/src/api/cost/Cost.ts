import { Apartment } from "../apartment/Apartment";

export type Cost = {
  amount: number | null;
  apartment?: Apartment | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  updatedAt: Date;
};
