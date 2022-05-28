import React from "react";
import { Container, Image, Content, Name, Info, Button } from "./styles";

import { IUser } from "interfaces";

export const UserCard: React.FC<IUser> = (props: IUser) => {

  return (
    <Container>
      <Image src={props.img} alt={props.name} />
      <Content>
        <Name>{props.name}</Name>
        <Info>ID: {props.id} - Username: {props.username}</Info>
      </Content>
      <Button>Pagar</Button>
    </Container>
  );

}
