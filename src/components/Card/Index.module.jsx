import { useState } from "react";
import { Button } from "../Button/Index.module";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import usePlayer from "../../hooks/usePlayer";

// eslint-disable-next-line react/prop-types
export const Card = ({ playerName }) => {
  const { removeCard, updateCardScore } = usePlayer();
  const [score, setScore] = useState(0);
  const addScore = () => {
    setScore((prevScore) => prevScore + 1)
    updateCardScore(playerName, "add");  
  }
  const subScore = () => {
    setScore((prevScore) => prevScore > 0 ? prevScore - 1 : 0)
    updateCardScore(playerName, "sub");
  }

  return (
    <div className={`w-full md:w-1/4 bg-blue-300 p-2 rounded-md flex flex-col gap-1 shadow-md`}>
      <div className="bg-blue-400 rounded-md px-1 py-2 text-center font-bold">
          {playerName}
        <div>{score} points</div>
      </div>
      <div className="flex justify-start gap-1">
        <Button name={<FaPlus />} clickHandler={addScore} />
        <Button name={<FaMinus />} clickHandler={subScore} />
        <Button name={<FaRegTrashAlt />} clickHandler={() => removeCard(playerName)} />
      </div>
    </div>
  );
};
