import { create } from 'zustand'
import { createCardTexture } from '../features/Cards/card-draw';

interface GameState {
    yearNumber: number;
    cards: Card[];
    nextTurn: () => void;
    addNewCard: () => Promise<void>;
}

interface Card {
  id: string; // Unique identifier for the card
  texture: THREE.Texture | null; // To store the generated texture
}

  
export const useGameStore = create<GameState>((set, get) => ({
  yearNumber: 2000,
  cards: [], // Initial cards
  nextTurn: async () => {
    // Call addNewCard first and wait for it to finish
    await get().addNewCard();
    // Then increment the year number
    set((state) => ({
      yearNumber: state.yearNumber + 1,
    }));
  },
  addNewCard: async () => {
    try {
      const newTexture = await createCardTexture();
      const newCard: Card = {
        id: `card-${Date.now()}`, // Unique identifier for the card
        texture: newTexture,
      };

      set((state) => ({
        cards: [...state.cards, newCard],
      }));
    } catch (error) {
      console.error("Failed to create card texture:", error);
    }
  },
}));

