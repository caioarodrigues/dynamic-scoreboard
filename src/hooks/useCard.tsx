import React from "react";
import { Card } from "../Components/Card/Index.module";

interface createCardProps {
  name: string;
}

export const useCard = () => {
  const createCard = ({ name }: createCardProps) => <Card name={name} />

  return { createCard }
}