/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";

const CardsContext = createContext();

export const useCardsContext = () => {
  return useContext(CardsContext);
};

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const createCard = (playerName) => {
    setCards((prevCards) => {
      const newCard = { playerName, score: 0 };
      return [...prevCards, newCard];
    });
  }
  const updateCard = (playerName, score) => {
    setCards((prevCards) => {
      const newCards = prevCards.map((card) => {
        if (card.playerName === playerName) {
          return { ...card, score };
        }
        return card;
      });
      return newCards;
    });
  };

  return (
    <CardsContext.Provider value={{ cards, updateCard, createCard, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};
