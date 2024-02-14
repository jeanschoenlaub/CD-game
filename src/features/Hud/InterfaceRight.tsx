import React from "react";
import "./InterfaceRight.css";
import { useGameStore } from "../../stores/useGame";

export default function InterfaceRight() {
  const nextTurn = useGameStore((state) => state.nextTurn);

  return (
    <div className="nextTurnButton">
      <button onClick={nextTurn}>Click me</button>
    </div>
  );
}