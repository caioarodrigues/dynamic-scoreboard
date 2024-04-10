import React, { useState } from "react";
import { Button } from "../Button/Index.module";
import { useCardsContext } from "../../Context/CardsContext";

interface CardProps {
  name: string;
}

export const Card = ({ name }: CardProps) => {
  const {  } = useCardsContext();
  const [score, setScore] = useState(0);

  return (
    <div className="bg-blue-400 w-full border border-white rounded-sm">
      <div className="text-center">
        <h1>{name}</h1>
        <h2>{score}</h2>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <Button
          handler={() => setScore((state) => state + 1)}
          text="+"
        />
        <Button
          handler={() => score > 0 && setScore((state) => state - 1)}
          text="-"
        />
      </div>
    </div>
  );
};
