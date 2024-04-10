import React from "react";
import { createContext, useContext, useState } from "react";

type player = {
  name: string;
  score: number;
};

interface CardsContextProps {
  //players: player[];
  createCard: (name: string) => void;
  getCards: () => player[];
}

interface CardsContextProviderProps {
  children: React.ReactNode;
}

const CardsContext = createContext<CardsContextProps>({
  //players: [],
  createCard: () => {},
  getCards: () => [],
});

export const useCardsContext = () => {
  return useContext(CardsContext);
};

export const CardsContextProvider = ({
  children,
}: CardsContextProviderProps) => {
  const [cards, setCards] = useState<player[]>([{ name: "player1", score: 0 }]);
  const createCard = (name: string) =>
    setCards((cards) => [...cards, { name, score: 0 }]);
  const getCards = () => cards;

  return (
    <CardsContext.Provider value={{ createCard, getCards }}>
      {children}
    </CardsContext.Provider>
  );
};
