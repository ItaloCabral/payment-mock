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
import { AmountContext } from "contexts/AmountContext";
import { CardContext } from "contexts/CardContext";

import { useCard } from "hooks";

import { CardOption } from "components";
import { CurrencyInputOnChangeValues } from "react-currency-input-field/dist/components/CurrencyInputProps";

type PaymentModalProps = {
  display: boolean;
  handleCloseModal: () => void;
  handleSubmit: () => void;
}; 

export const PaymentModal: React.FC<PaymentModalProps> = ({ display, handleCloseModal, handleSubmit}) => {

  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    setLoading(false);
  }, [display]);


  const { cards, getCards } = useCard();

  const { userState } = useContext(UserContext);
  const { amountState, setAmountState } = useContext(AmountContext);
  const { cardState } = useContext(CardContext);

  const handleAmmountChange = (value: string | undefined, name?: string | undefined, values?: CurrencyInputOnChangeValues | undefined) => {
    setAmountState(values?.float??0);
  };

  const handleClick = () => {
    if(loading){
      return;
    }

    if(!cardState.cardNumber) {
      alert("Selecione um cartão");
      return;
    }
    
    if(!amountState) {
      alert("Informe um valor");
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
              <SubTitle>Selecione um cartão:</SubTitle>
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
                value={amountState}
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
            <Button  $loading={loading} onClick={() => handleClick()}>Pagar</Button>
          </Footer>
        </Container>
    </BackDrop>
  );
};
