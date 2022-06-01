import React, { createContext, useState } from "react";

import { ICard } from "interfaces";

type CardContextProps = {
  cardState: ICard;
  setCardState: React.Dispatch<React.SetStateAction<ICard>>;
};

type CardProviderProps = {
  children?: React.ReactNode;
};

const DEFAULT_VALUE: CardContextProps = {
  cardState: {
    cvv: 0,
    cardNumber: "",
    expiryDate: "",
  },
  setCardState: () => {},
};

const CardContext = createContext<CardContextProps>(DEFAULT_VALUE);

const CardProvider: React.FC<CardProviderProps> = ({ children }) => {

  const [cardState, setCardState] = useState(DEFAULT_VALUE.cardState);

  return (
    <CardContext.Provider value={{ cardState, setCardState }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
