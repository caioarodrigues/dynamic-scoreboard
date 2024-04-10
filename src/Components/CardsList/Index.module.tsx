import React from "react";
import { useCard } from "../../hooks/useCard";
import { Button } from "../Button/Index.module";
import { useState } from "react";
import { useRef } from "react";

export const CardsList = () => {
  const { createCard } = useCard();
  const [inputText, setInputText] = useState("");
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
          createCard({ name: inputText });
          clearInputText();
        }}
      />
    </div>
  );
};
