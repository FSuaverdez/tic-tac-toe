import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useBoardState = create(
  devtools(
    (set, get) => ({
      boardState: ["", "", "", "", "", "", "", "", ""],
      onPlay: (play, index) => {
        const boardState = get().boardState;
        boardState[index] = play;
        set({ boardState });
      },
      onClear: () => set({ boardState: ["", "", "", "", "", "", "", "", ""] }),
    }),
    { name: "boardSate" }
  )
);

export default useBoardState;
