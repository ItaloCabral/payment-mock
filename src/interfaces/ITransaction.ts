import { ICard } from "./ICard";

export interface ITransaction {
  success: boolean;
  status: string;
}

export interface ITransactionPayload {
  card: ICard;
  destinationUserId: number;
  value: number;
}
