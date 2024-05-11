/* eslint-disable react/prop-types */
import { Button } from "../Button/Index.module";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import usePlayer from "../../hooks/usePlayer";

export const Card = ({ playerName }) => {
  const { removeCard, updateCardScore, getScore } = usePlayer();
  const score = getScore(playerName);

  return (
    <div className="w-full md:w-1/4 bg-blue-300 p-2 rounded-md flex flex-col gap-1 shadow-md">
      <div className="bg-blue-400 rounded-md px-1 py-2 text-center font-bold">
        {playerName}
        <div>{score} points</div>
      </div>
      <div className="flex justify-start gap-1">
        <Button
          name={<FaPlus />}
          clickHandler={() => updateCardScore(playerName, "add")}
        />
        <Button
          name={<FaMinus />}
          clickHandler={() => updateCardScore(playerName, "sub")}
        />
        <Button
          name={<FaRegTrashAlt />}
          clickHandler={() => removeCard(playerName)}
        />
      </div>
    </div>
  );
};
