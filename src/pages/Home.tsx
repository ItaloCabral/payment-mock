import React, { useEffect } from "react";
import { Container, Title } from "styles/HomeStyles";

import { useUser } from "hooks";

import { UserCard, Loading } from "components";

export const Home: React.FC = () => {

  const { users, getAll, loading } = useUser();

  useEffect(() => {
    console.log(loading);
    getAll();
  }, [getAll]);

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      {
        loading ? (
          <Loading />
        ) : (
          users.map(user => 
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              img={user.img}
              username={user.username}
            />
          ))
      }
    </Container>
  );
}
