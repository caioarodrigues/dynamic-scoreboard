import { Card } from "../Card/Index.module";
import usePlayer from "../../hooks/usePlayer";
import { Slider } from "../Slider/Index.module";

export const CardsList = () => {
  const { getCards } = usePlayer();
  const cards = getCards();

  return (
    <div className="md:w-2/3">
      <Slider>
        {cards.map(({ playerName }, index) => (
            <Card key={index} playerName={playerName} />
        ))}
      </Slider>
    </div>
  );
};
