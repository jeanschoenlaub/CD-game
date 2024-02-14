import React, { createContext, useState, useContext, useEffect, useRef, type ReactNode } from 'react';

interface GameContextType {
  yearNumber: number;
  nextTurn: () => void;
}

// Create a context with a default value
export const GameContext = createContext<GameContextType>({
  yearNumber: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  nextTurn: () => {},
});

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [yearNumber, setYearNumber] = useState(0);

  const nextTurn = () => {
    setYearNumber((currentYear) => currentYear + 1);
    // Add additional logic for advancing the turn here
    console.log("Advancing to the next year:", yearNumber + 1);
  };

  return (
    <GameContext.Provider value={{ yearNumber, nextTurn }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
