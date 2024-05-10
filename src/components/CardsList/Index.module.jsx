import { Card } from "../Card/Index.module";
import { useCardsContext } from "../../context/CardsContext";

export const CardsList = () => {
  const { cards } = useCardsContext();

  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-end pt-2 md:w-2/3">
      {cards.map(({ playerName }, index) => (
        <Card key={index} playerName={playerName} />
      ))}
    </div>
  );
};
