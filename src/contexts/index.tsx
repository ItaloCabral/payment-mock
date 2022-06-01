import React from "react";

import { UserProvider } from "./UserContext";
import { CardProvider } from "./CardContext";

export const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <UserProvider>
      <CardProvider>
        {children}
      </CardProvider>
    </UserProvider>
  );
}
