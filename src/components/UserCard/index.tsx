import React, { useContext } from "react";
import { Container, Image, Content, Name, Info, Button } from "./styles";

import { IUser } from "interfaces";

import { UserContext } from "contexts/UserContext";

type UserCardProps = {
  data: IUser;
  toggleModal: () => void;
};

export const UserCard: React.FC<UserCardProps> = ({data, toggleModal}) => {

  const { setUserState: setSelectedUser } = useContext(UserContext);

  const { id, img, name, username } = data;

  const handleOpenModal = () => {
    setSelectedUser({
      id,
      img,
      name,
      username
    });
    toggleModal();
  };

  return (
    <Container>
      <Image src={img} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Info>ID: {id} - Username: {username}</Info>
      </Content>
      <Button onClick={handleOpenModal}>Pagar</Button>
    </Container>
  );

}
