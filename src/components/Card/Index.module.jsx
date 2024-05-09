import { useState } from "react";
import { Button } from "../Button/Index.module";
import { FaRegTrashAlt } from "react-icons/fa";
import usePlayer from "../../hooks/usePlayer";

// eslint-disable-next-line react/prop-types
export const Card = ({ playerName }) => {
  const { getScore } = usePlayer();
  const [score, setScore] = useState(0);
  const addScore = () => setScore((prevScore) => prevScore + 1);
  const subScore = () =>
    setScore((prevScore) => {
      if (prevScore > 0) {
        return prevScore - 1;
      }
      return prevScore;
    });

  return (
    <div className={`w-1/3 bg-blue-400 p-2 rounded-md flex flex-col gap-1 shadow-md border
    border-slate-400`}>
      <div className="bg-blue-300 rounded-md px-1 py-2 text-center font-bold">
        {playerName}
        <div>{score}</div>
      </div>
      <div className="flex justify-between">
        <Button name="Add" clickHandler={addScore} />
        <Button name="Sub" clickHandler={subScore} />
        <Button name={<FaRegTrashAlt />} />
      </div>
    </div>
  );
};
