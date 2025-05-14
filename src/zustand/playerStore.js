import { create } from "zustand";

export const usePlayerStore =create((set)=>({
    players: ["Zidane", "Ronaldinho", "Maradonna", "Iniesta", "Xavi"],
    addPlayer: (newPlayer) => set((state) =>({
        players: [...state.players, newPlayer],
    })),
}));

