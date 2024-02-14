import React from "react";
import "./InterfaceRight.css";
import { useGame } from "../GameLogic/GameContext";

export default function InterfaceRight({ onNextTurn }) {
  const { nextTurn } = useGame();

  return (
    <div className="nextTurnButton">
      <button onClick={nextTurn}>Click me</button>
    </div>
  );
}