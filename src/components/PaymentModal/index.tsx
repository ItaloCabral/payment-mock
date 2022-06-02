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
  Input,
  Image
} from "./styles";

import InputMask from "react-input-mask";

import { UserContext } from "contexts/UserContext";

import { useCard } from "hooks";

import { CardOption } from "components";

type PaymentModalProps = {
  display: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<void>>;
  handleSubmit: () => void;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const PaymentModal: React.FC<PaymentModalProps> = ({ display, toggleModal, handleSubmit, setAmount }) => {

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
              <Input
                type="text"
                placeholder="Valor a ser transferido"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </WalletInfo>
            <ReceiverInfo>
              <Image src={userState.img}/>
              <SubTitle>ID: { userState.id }</SubTitle>
              <SubTitle>{ userState.username }</SubTitle>
            </ReceiverInfo>
          </Content>
          <Footer>
            <Button onClick={() => toggleModal()} color="#f55">Cancelar</Button>
            <Button onClick={() => { handleSubmit() }}>Pagar</Button>
          </Footer>
        </Container>
    </BackDrop>
  );
};
