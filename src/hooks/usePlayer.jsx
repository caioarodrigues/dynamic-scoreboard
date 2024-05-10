import { useCardsContext } from "../context/CardsContext";

export default function usePlayer() {
  const { cards, setCards } = useCardsContext();

  const createCard = (playerName) => {
    const newCard = {
      player: playerName,
      score: 0,
    };
    setCards([...cards, newCard]);
  };
  const removeCard = (playerName) => {
    const newCards = cards.filter((card) => card.playerName !== playerName);
    setCards(newCards);
  };
  const updateCardScore = (playerName, action) => {
    const newCards = cards.map((card) => {
      if (card.playerName === playerName) {
        return {
          ...card,
          score:
            action === "add"
              ? card.score + 1
              : card.score > 0 && card.score - 1 || 0,
        };
      }
      return card;
    });
    setCards(newCards);
  };
  const getCards = () => cards;
  const getScore = (playerName) => {
    const card = cards.find((card) => card.player === playerName);
    return card ? card.score : 0;
  };
  const sortedCards = () => {
    const newCards = cards.slice().sort((a, b) => b.score - a.score);

    return newCards;
  };

  return { removeCard, updateCardScore, getCards, createCard, getScore, sortedCards };
}
