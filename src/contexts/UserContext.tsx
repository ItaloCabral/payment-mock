import React, { createContext, useEffect, useState } from "react";

import { IUser } from "interfaces";

type UserContextProps = {
  userState: IUser;
  setUserState: React.Dispatch<React.SetStateAction<IUser>>;
};

type UserProviderProps = {
  children?: React.ReactNode;
};

const DEFAULT_VALUE: UserContextProps = {
  userState: {
    id: 0,
    name: "",
    username: "",
    img: ""
  },
  setUserState: () => {},
};

const UserContext = createContext<UserContextProps>(DEFAULT_VALUE);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  const [userState, setUserState] = useState(DEFAULT_VALUE.userState);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
