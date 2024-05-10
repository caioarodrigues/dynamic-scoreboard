import { Button } from "../Button/Index.module";
import { useCardsContext } from "../../context/CardsContext";
import { Form } from "../Form/Index.module";
import { useState, useRef } from "react";

export const Header = () => {
  const { createCard } = useCardsContext();
  const [playerName, setPlayerName] = useState("");
  const inputRef = useRef(null);

  const createPlayer = () => {
    if (playerName === "") {
      alert("Please enter a player name");
      return;
    }

    createCard(playerName);
  };

  const createPlayerHandler = () => {
    createPlayer();
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <header className="bg-gray-800 py-2 text-white flex flex-col justify-between items-center">
      <h1 className="text-xl font-bold">Scoreboard</h1>
      <Form>
        <input
          type="text"
          placeholder="Player Name"
          onChange={handlePlayerNameChange}
          ref={inputRef}
          className="bg-gray-200 outline-none rounded-md px-1 py-2 text-black"
        />
        <Button clickHandler={createPlayerHandler} name={"new player"} />
      </Form>
    </header>
  );
};
