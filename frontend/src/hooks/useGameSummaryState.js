import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useGameSummaryState = create(
  devtools(
    (set) => ({
      winner: "",
      textColor: "",
      setWinner: (winner) => set({ winner: winner }),
      setColor: (color) => set({ textColor: color }),
    }),
    { name: "gameSummaryState" }
  )
);

export default useGameSummaryState;
