import React from "react";

import { UserProvider } from "./UserContext";
import { CardProvider } from "./CardContext";
import { AmountProvider } from "./AmountContext";

export const GlobalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <UserProvider>
      <CardProvider>
        <AmountProvider>
          {children}
        </AmountProvider>
      </CardProvider>
    </UserProvider>
  );
}
