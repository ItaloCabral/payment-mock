import { Api } from '../providers';
import { ITransaction, ITransactionPayload } from '../interfaces';

const createTransaction = (payload: ITransactionPayload) => Api.post<ITransaction>('/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', payload);

export const TransactionsService = {
  createTransaction
};
