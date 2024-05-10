import usePlayer from "../../hooks/usePlayer";

export const Table = () => {
  const { sortedCards } = usePlayer();
  const _ = sortedCards();

  return (
    <div
      className={`w-full self-start text-center my-2 md:w-1/3 ${
        _.length > 0 ? "block" : "hidden"
      }`}
    >
      <h1 className="text-2xl font-bold text-white">Top players</h1>
      <table className="w-full bg-slate-300 rounded-md">
        <thead>
          <tr className="text-xl font-bold">
            <td>Player</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {_.map(({ playerName, score }, index) => (
            <tr key={index} className="odd:bg-slate-200">
              <td>{playerName}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
