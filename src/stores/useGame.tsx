import { create } from 'zustand'

interface GameState {
    yearNumber: number;
    nextTurn: () => void;
  }
  
export const useGameStore = create<GameState>((set) => ({
  yearNumber: 2000,
  nextTurn: () => set((state) => ({ yearNumber: state.yearNumber + 1 })),
}));