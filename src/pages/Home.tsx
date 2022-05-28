import React, { useState, useEffect } from "react";
import { Container, Title } from "../styles/Home";

import UserCard from "../components/UserCard";

export const Home: React.FC = () => {

  interface User{
    id: number;
    name: string;
    img: string;
    username: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  // USERS_ENDPOINT=
  // TRANSACTIONS_ENDPOINT=https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989
  useEffect(() => {
    async function loadUsers(){
      const response = await fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce');
      const data = await response.json();
      setUsers(data);
    }
    loadUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Container>
      <Title>Lista de Usuários</Title>
      {
        users.map(user => 
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            img={user.img}
            username={user.username}
          />
        )
      }
    </Container>
  );
}
