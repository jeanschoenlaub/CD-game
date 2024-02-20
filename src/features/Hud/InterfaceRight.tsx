import React from "react";
import "./InterfaceRight.css";
import { useGameStore } from "../../stores/useGame";

export default function InterfaceRight() {
  const nextTurn = useGameStore((state) => state.nextTurn);

  // Wrap nextTurn in an async function
  const handleNextTurn = async () => {
    await nextTurn();
    // Perform any additional actions after the turn has ended
  };

  return (
    <div className="nextTurnButton">
      <button onClick={handleNextTurn}>Next Turn</button>
    </div>
  );
}