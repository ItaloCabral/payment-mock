import React, { useEffect, useState } from "react";
import { Container, Title } from "styles/HomeStyles";

import { useUser } from "hooks";

import { UserCard, Loading, PaymentModal } from "components";

export const Home: React.FC = () => {

  const { users, getAll, loading } = useUser();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
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
      <PaymentModal display={modal} toggleModal={toggleModal} />
    </Container>
  );
}
