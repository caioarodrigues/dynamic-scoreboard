import { Button } from "../Button/Index.module";
import { useCardsContext } from "../../context/CardsContext";
import { Form } from "../Form/Index.module";
import { Input } from "../Input/Index.module";
import { useState } from "react";

export const Header = () => {
  const { createCard } = useCardsContext();
  const [playerName, setPlayerName] = useState("");
  const createPlayer = () => {
    console.log(playerName)
    if (playerName === "")
      return alert("Please enter a player name");

    createCard(playerName);
  }

  return (
    <header className="bg-gray-800 py-2 text-white flex flex-col justify-between items-center">
      <h1 className="text-xl font-bold">Scoreboard</h1>
      <Form>
        <Input
          type={"text"}
          placeholder={"Player Name"}
          changeHandler={setPlayerName}
        />
        <Button
          clickHandler={createPlayer}
          name={"new player"}
        />
      </Form>
    </header>
  );
};
