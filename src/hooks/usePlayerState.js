import { create } from "zustand";
import { devtools } from "zustand/middleware";

const usePlayerState = create(
  devtools(
    (set, get) => ({
      player1Name: "",
      player2Name: "",
      player1Wins: 0,
      player1Losses: 0,
      player2Wins: 0,
      player2Losses: 0,
      draw: 0,
      player1Side: "X",
      player2Side: "O",
      isChoosePlayerName: false,
      setChooseName: (bool) => set({ isChoosePlayerName: bool }),
      setPlayerName: (name, playerNumber) => {
        if (playerNumber === 1) {
          set({ player1Name: name });
        }
        if (playerNumber === 2) {
          set({ player2Name: name });
        }
      },
      swapPlaySide: () => {
        if (get().player1Side === "X") {
          set({ player1Side: "O", player2Side: "X" });
        } else {
          set({ player1Side: "X", player2Side: "O" });
        }
      },
      resetPlaySide: () => {
        set({ player1Side: "X", player2Side: "O" });
      },
      clearName: () => set({ player1Name: "", player2Name: "" }),
      onWin: (playerNumber) => {
        if (playerNumber === 1) {
          set((state) => ({
            player1Wins: state.player1Wins + 1,
          }));
        }
        if (playerNumber === 2) {
          set((state) => ({
            player2Wins: state.player2Wins + 1,
          }));
        }
      },
      onLose: (playerNumber) => {
        if (playerNumber === 1) {
          set((state) => ({
            player1Losses: state.player1Losses + 1,
          }));
        }
        if (playerNumber === 2) {
          set((state) => ({
            player2Losses: state.player2Losses + 1,
          }));
        }
      },
      onDraw: () => {
        set((state) => ({
          draw: state.draw + 1,
        }));
      },
      resetDraw: () => {
        set({ draw: 0 });
      },
      onClearWins: () => set({ player1Wins: 0, player2Wins: 0 }),
      onClearLosses: () => set({ player1Losses: 0, player2Losses: 0 }),
      resetPlayerState: () =>
        set({
          player1Name: "",
          player2Name: "",
          player1Wins: 0,
          player1Losses: 0,
          player2Wins: 0,
          player2Losses: 0,
          draw: 0,
          player1Side: "X",
          player2Side: "O",
        }),
    }),
    { name: "playerState" }
  )
);

export default usePlayerState;
