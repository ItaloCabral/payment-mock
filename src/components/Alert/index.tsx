import { ITransaction } from 'interfaces';
import React from 'react';

import { Container, BackDrop, Header, Title, Content, SubTitle } from "./styles";

type AlertProps = {
  show: boolean;
  toggleAlert: React.Dispatch<React.SetStateAction<void>>;
  transactionInfo: ITransaction|[]
};


export const Alert: React.FC<AlertProps> = ({ show, toggleAlert, transactionInfo }) => {
  return (
    <BackDrop show={show}>
      <Container>
        <Header>
          <Title>Recibo de pagamento</Title>
          <SubTitle onClick={() => toggleAlert()}>Fechar</SubTitle>
        </Header>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur,
            nisi nisl tincidunt nisi, eget tincidunt nisl nisl euismod
            urna.
          </p>
        </Content>
      </Container>
    </BackDrop>
  );
}
