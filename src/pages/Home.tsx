import React, { useEffect, useState, useContext } from "react";
import { Container, Title } from "styles/HomeStyles";

import { useUser } from "hooks";

import { UserCard, Loading, PaymentModal, Alert } from "components";

import { TransactionsService } from "services";

import { UserContext } from "contexts/UserContext";
import { CardContext } from "contexts/CardContext";
import { AmountContext } from "contexts/AmountContext";
import { ITransaction } from "interfaces";

export const Home: React.FC = () => {

  const { users, getAll, loading } = useUser();

  const { cardState, eraseCardState } = useContext(CardContext);
  const { userState, eraseUserState } = useContext(UserContext);
  const { amountState, eraseAmountState } = useContext(AmountContext);

  const [transaction, setTransactions] = useState<ITransaction>({
    success: false,
    status: "",
  });

  const { createTransaction } = TransactionsService;

  const [modal, setModal] = useState(false);
  const [showAlert, setAlert] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  const toggleAlert = () => {
    setAlert(!showAlert);
  }

  const handleCloseModal = () => {
    eraseCardState();
    eraseUserState();
    eraseAmountState();
    toggleModal();
  }

  const handleSubmit = async () => {

    const response = await createTransaction({
      card_number: cardState.cardNumber,
      cvv: cardState.cvv,
      expiry_date: cardState.expiryDate,
      value: amountState,
      destination_user: userState.id
    })

    const data = await response.data;

    setTransactions(data);
    eraseCardState();
    eraseUserState();
    eraseAmountState();    
    
    toggleModal();
    setTransactions(data);
    toggleAlert();
    
  }

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      {
        loading 
        ? <Loading />
        : (users.map(user => 
            <UserCard
              key={user.id}
              data={user}
              toggleModal={toggleModal}
            />
          ))
      }
      <PaymentModal display={modal} handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} />
      <Alert show={showAlert} transactionInfo={transaction} toggleAlert={toggleAlert} />
    </Container>
  );
}
