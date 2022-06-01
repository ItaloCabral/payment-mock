import { useState, useCallback } from "react";

import { ICard } from "interfaces";
import { CardsService } from "services";

export const useCard = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const getCards = useCallback(() => {
    const data = CardsService.getAllCards();
    setCards(data);
  }, []);

  return { cards, getCards };
}
