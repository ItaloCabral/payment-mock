import React, { createContext, useState } from "react";

type AmountContextProps = {
  amountState: number;
  setAmountState: React.Dispatch<React.SetStateAction<number>>;
  eraseAmountState: () => void;
};

type AmountProviderProps = {
  children?: React.ReactNode;
};

const DEFAULT_VALUE: AmountContextProps = {
  amountState: 0,
  setAmountState: () => {},
  eraseAmountState: () => {}
};

const AmountContext = createContext<AmountContextProps>(DEFAULT_VALUE);

const AmountProvider: React.FC<AmountProviderProps> = ({ children }) => {

  const [amountState, setAmountState] = useState(DEFAULT_VALUE.amountState);

  const eraseAmountState = () => {
    setAmountState(DEFAULT_VALUE.amountState);
  }

  return (
    <AmountContext.Provider value={{ amountState, setAmountState, eraseAmountState }}>
      {children}
    </AmountContext.Provider>
  );
}

export { AmountContext, AmountProvider };
