import { Api } from 'providers';
import { IUser } from 'interfaces';

const getAllUsers = async () => Api.get<IUser[]>("/v2/5d531c4f2e0000620081ddce");

export const UsersService = {
  getAllUsers
};
