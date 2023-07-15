import { create } from "zustand";

const useGameState = create((set) => ({
  isPlaying: false,
  isContinuePending: false,
  playCount: 0,
  incrementPlayCount: () => {
    set((state) => ({ playCount: state.playCount + 1 }));
  },
  clearPlayCount: () => set({ playCount: 0 }),
  onRoundEnd: () => set({ isContinuePending: true }),
  onRoundStart: () => set({ isContinuePending: false }),
  onStart: () => set({ isPlaying: true }),
  onStop: () => set({ isPlaying: false, isContinuePending: false }),
}));

export default useGameState;
