import React from "react";
import { Button } from "../Button/Index.module";
import { useState } from "react";
import { useRef } from "react";
import { useCardsContext } from "../../Context/CardsContext";
import { Card } from "../Card/Index.module";

export const CardsList = () => {
  const [inputText, setInputText] = useState("");
  const { createCard, getCards } = useCardsContext();
  const cards = getCards();
  const sortedCards = cards.sort((a, b) => a.score - b.score);

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
          if (!inputText) return;

          createCard(inputText);
          clearInputText();
          setInputText('');
        }}
      />

      <div className="grid grid-cols-2 gap-1 items-center mr-1 ml-1 mt-1">
        {sortedCards.map(({ name }, index) => (
          <div className="col-span-1" key={index}>
            <Card name={name} />
          </div>
        ))}
      </div>
    </div>
  );
};
