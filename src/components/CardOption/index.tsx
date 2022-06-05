import React, { useContext } from 'react';

import { Container, InfoCard } from './styles';

import { CardContext } from 'contexts/CardContext';
import { ICard } from 'interfaces';

export const CardOption: React.FC<ICard> = (props: ICard) => {

  const { cardState, setCardState } = useContext(CardContext);

  const handleCardSelection = () => {
    setCardState(props);
  }

  const { cvv, cardNumber, expiryDate } = props;

  return (
    <Container onClick={handleCardSelection}>
      <InfoCard isSelected={cardState.cvv === cvv}>
        <div>
          <span>Cartão com final {cardNumber.slice(11, 15)}</span>
        </div>
        <div>
          <span>Expira em: {expiryDate}</span>
        </div>
      </InfoCard>
    </Container>
  );
};
  