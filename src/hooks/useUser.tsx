import { useState, useCallback } from "react";

import { IUser } from "../interfaces";
import { UsersService } from "../services";

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [loading, setLoading] = useState(true);

  const getAll = useCallback(async () => {
    const { status, data } = await UsersService.getAllUsers();
    if(status !== 200) throw new Error();
    setLoading(false);
    setUsers(data);
  }, []);

  return { users, getAll, loading };
}
