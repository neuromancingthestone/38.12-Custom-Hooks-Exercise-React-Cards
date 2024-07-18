import React from "react";
import useFlip from "./hooks/useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  // Code change 1
  // Created custom hook, called here to flip card
  const [isFacingUp, toggleFacingUp] = useFlip(true);

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
