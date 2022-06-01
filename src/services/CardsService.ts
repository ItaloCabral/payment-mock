import { ICard } from "interfaces";

let cardList = [
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

const getAllCards = (): ICard[] => cardList;

export const CardsService = {
  getAllCards
}
