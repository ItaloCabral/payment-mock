import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  BackDrop,
  Title,
  Header,
  Content,
  WalletInfo,
  ReceiverInfo,
  Footer,
  SubTitle,
  Button,
  Image
} from "./styles";

import CurrencyInput from "react-currency-input-field";

import { UserContext } from "contexts/UserContext";

import { useCard } from "hooks";

import { CardOption } from "components";
import { CurrencyInputOnChangeValues } from "react-currency-input-field/dist/components/CurrencyInputProps";

type PaymentModalProps = {
  display: boolean;
  handleCloseModal: () => void;
  handleSubmit: () => void;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
  cardNumber: string;
}; 

export const PaymentModal: React.FC<PaymentModalProps> = ({ display, handleCloseModal, handleSubmit, setAmount, amount, cardNumber}) => {

  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    setLoading(false);
  }, [display]);


  const { cards, getCards } = useCard();

  const { userState } = useContext(UserContext);

  const handleAmmountChange = (value: string | undefined, name?: string | undefined, values?: CurrencyInputOnChangeValues | undefined) => {
    setAmount(values?.float??0);
  };

  const handleClick = () => {
    if(loading){
      return;
    }

    setLoading(true);
    handleSubmit();
  }

  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <BackDrop show={display} >
        <Container>
          <Header>
            <Title>Pagamento para: { userState.name }</Title>
          </Header>
          <Content>
            <WalletInfo>
              <SubTitle>Slecione um cartão:</SubTitle>
              {
                cards.map(card => (
                  <CardOption key={card.cardNumber}
                    cvv={card.cvv}
                    cardNumber={card.cardNumber}
                    expiryDate={card.expiryDate}
                  />
                ))
              }
              <CurrencyInput
                id="amount"
                name="amount"
                placeholder="Valor a ser transferido"
                defaultValue={0}
                decimalsLimit={2}
                groupSeparator="."
                decimalSeparator=","
                onValueChange={handleAmmountChange}
                value={amount}
                prefix="R$"
              />
            </WalletInfo>
            <ReceiverInfo>
              <Image src={userState.img}/>
              <SubTitle>ID: { userState.id }</SubTitle>
              <SubTitle>{ userState.username }</SubTitle>
            </ReceiverInfo>
          </Content>
          <Footer>
            <Button onClick={() => handleCloseModal()} color="#f55">Cancelar</Button>
            <Button disabled={!cardNumber.length || !amount} loading={loading} onClick={() => handleClick()}>Pagar</Button>
          </Footer>
        </Container>
    </BackDrop>
  );
};
