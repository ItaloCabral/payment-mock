export interface ITransaction {
  success: boolean;
  status: string;
}

export interface ITransactionPayload {
  card_number: string;
  cvv: number;
  expiry_date: string;
  destination_user: number;
  value: number;
}
