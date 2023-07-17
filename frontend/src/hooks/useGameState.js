import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useGameState = create(
  devtools(
    (set) => ({
      isPlaying: false,
      isContinuePending: false,
      playCount: 0,
      roundNo: 1,
      playerTurn: 1,
      firstTurn: 1,
      setPlayerTurn: (player) => set({ playerTurn: player }),
      swapFirstTurn: () => {
        set((state) => ({
          firstTurn: state.firstTurn === 1 ? 2 : 1,
          playerTurn: state.firstTurn === 1 ? 2 : 1,
        }));
      },
      incrementRound: () => {
        set((state) => ({ roundNo: state.roundNo + 1 }));
      },
      incrementPlayCount: () => {
        set((state) => ({ playCount: state.playCount + 1 }));
      },
      resetPlayCount: () => set({ playCount: 0 }),
      resetRoundNo: () => set({ roundNo: 0 }),
      onRoundEnd: () => set({ isContinuePending: true }),
      onRoundStart: () => set({ isContinuePending: false }),
      onStart: () => set({ isPlaying: true }),
      onStop: () => set({ isPlaying: false, isContinuePending: false }),
    }),
    { name: "gameState" }
  )
);

export default useGameState;
