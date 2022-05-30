import { ICard } from "interfaces";

const cardList = [
  {
    cardNumber: '1111111111111111',
    cvv: 111,
    expiryDate: '01/18',
  },
  {
    cardNumber: '4111111111111234',
    cvv: 123,
    expiryDate: '01/20',
  },
];

const getCards = (): ICard[] => cardList;

export const CardService = {
  getCards
}
