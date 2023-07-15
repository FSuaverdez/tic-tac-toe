import { create } from "zustand";

const usePlayerState = create((set) => ({
  player1Name: "",
  player2Name: "",
  player1Wins: 0,
  player2Wins: 0,
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
  onClearWins: () => set({ player1Wins: 0, player2Wins: 0 }),
}));

export default usePlayerState;
