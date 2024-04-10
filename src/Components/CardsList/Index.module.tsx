import React from "react";
import { useCard } from "../../hooks/useCard";
import { Button } from "../Button/Index.module";
import { useState } from "react";
import { useRef } from "react";
import { useCardsContext } from "../../Context/CardsContext";
import { Card } from "../Card/Index.module";

export const CardsList = () => {
  //const { createCard } = useCard();
  const [inputText, setInputText] = useState("");
  const { createCard, getCards } = useCardsContext();
  const cards = getCards();
  let inputRef = useRef<HTMLInputElement>(null);

  const clearInputText = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div>
      <input
        type="text"
        onChange={({ target }) => {
          target.value && setInputText(target.value);
        }}
        ref={inputRef}
      />
      <Button
        text="new card"
        handler={() => {
          createCard(inputText);
          clearInputText();
        }}
      />

      {cards.map(({ name }, index) => (
        <Card name={name} key={index} />
      ))}
    </div>
  );
};
