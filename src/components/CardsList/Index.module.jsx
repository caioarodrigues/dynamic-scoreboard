import { Card } from "../Card/Index.module";
import { useCardsContext } from "../../context/CardsContext";

export const CardsList = () => {
  const { cards } = useCardsContext();

  return (
    <div className="flex gap-4">
      {cards.map((card) => (
        <Card key={card.playerName} playerName={card.playerName} />
      ))}
    </div>
  );
}