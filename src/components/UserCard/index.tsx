import React from "react";
import { Container } from "./styles";

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

const UserCard: React.FC<User> = (props: User) => {

  return (
    <Container>
      <img src={props.img} alt={props.name} />
      <strong>{props.name}</strong>
      <span>{props.username}</span>
    </Container>
  );

}

export default UserCard;
