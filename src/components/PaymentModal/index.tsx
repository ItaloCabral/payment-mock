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
  Input
} from "./styles";

import { UserContext } from "contexts/UserContext";

import { useCard } from "hooks";

import { CardOption } from "components";

type PaymentModalProps = {
  display: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<void>>;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({ display, toggleModal }) => {

  const { cards, getCards } = useCard();

  const { userState } = useContext(UserContext);

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
              <Input placeholder="Valor a ser transferido" />
            </WalletInfo>
            <ReceiverInfo>
              
            </ReceiverInfo>
          </Content>
          <Footer>
            <Button onClick={() => toggleModal()} color="#f55">Cancelar</Button>
            <Button disabled>Pagar</Button>
          </Footer>
        </Container>
    </BackDrop>
  );
};
