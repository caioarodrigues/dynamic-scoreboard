import usePlayer from "../../hooks/usePlayer";

export const Table = () => {
  const { sortedCards } = usePlayer();
  const _ = sortedCards();

  return (
    <div
      className={`text-center my-2 w-full md:w-1/3 ${
        _.length > 0 ? "block" : "hidden"
      }`}
    >
      <table className="w-full">
        <thead className="bg-slate-400">
          <tr className="text-xl font-bold">
            <td>Player</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {_.map(({ playerName, score }, index) => (
            <tr key={index} className={`odd:bg-slate-200 even:bg-slate-300 `}>
              <td>{playerName}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
