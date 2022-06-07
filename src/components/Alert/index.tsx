import { ITransaction } from 'interfaces';
import React from 'react';

import { Container, BackDrop, Header, Title, Content, Footer, Button } from "./styles";

type AlertProps = {
  show: boolean;
  toggleAlert: React.Dispatch<React.SetStateAction<void>>;
  transactionInfo: ITransaction
};


export const Alert: React.FC<AlertProps> = ({ show, toggleAlert, transactionInfo }) => {

  const { success }  = transactionInfo;
  

  return (
    <BackDrop show={show}>
      <Container>
        <Header>
          <Title>Recibo de pagamento</Title>
        </Header>
        <Content>
          {
            success ? 
            "Pagamento realizado com sucesso!" :
            "Pagamento não realizado!"
          }
        </Content>
        <Footer>
          <Button color='#F55' onClick={() => toggleAlert()}>Fechar</Button>
        </Footer>
      </Container>
    </BackDrop>
  );
}
