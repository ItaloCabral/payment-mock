import React, { createContext, useState } from "react";

import { IUser } from "interfaces";

type UserContextProps = {
  userState: IUser;
  setUserState: React.Dispatch<React.SetStateAction<IUser>>;
  eraseUserState: () => void;
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
  eraseUserState: () => {}
};

const UserContext = createContext<UserContextProps>(DEFAULT_VALUE);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  const [userState, setUserState] = useState(DEFAULT_VALUE.userState);

  const eraseUserState = () => {
    setUserState(DEFAULT_VALUE.userState);
  }

  return (
    <UserContext.Provider value={{ userState, setUserState, eraseUserState }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
