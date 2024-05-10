import React from "react";
import { useCardsContext } from "../../context/CardsContext";
import usePlayer from "../../hooks/usePlayer";

export const Table = () => {
  const { cards } = useCardsContext();
  const { sortedCards } = usePlayer();
  const _ = sortedCards();

  return (
    <div className="w-11/12 self-center text-center my-2">
      <h1 className="text-2xl font-bold text-white">Top #3 players</h1>
      <table className="w-full bg-slate-300 rounded-md">
        <thead>
          <tr className="text-xl font-bold">
            <td>Player</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {_.map(
            ({ playerName, score }, index) =>
              index < 3 && (
                <tr key={index} className="odd:bg-slate-200">
                  <td>{playerName}</td>
                  <td>{score}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
