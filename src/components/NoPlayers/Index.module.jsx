import { IoWarningOutline } from "react-icons/io5";

export const NoPlayers = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <IoWarningOutline className="text-9xl text-white animate-bounce" />
      <div className="text-white text-center">
        <h2 className="text-xl font-bold">No Players</h2>
        <p>
          There are no players in the game. Please add some players to begin recording the scores.
        </p>
      </div>
    </div>
  );
};
