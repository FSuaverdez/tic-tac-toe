import { create } from "zustand";

const useBoardState = create((set, get) => ({
  boardState: ["", "", "", "", "", "", "", "", ""],
  onPlay: (play, index) => {
    const boardState = get().boardState;
    boardState[index] = play;
    set({ boardState });
  },
  onClear: () => set({ boardState: ["", "", "", "", "", "", "", "", ""] }),
}));

export default useBoardState;
