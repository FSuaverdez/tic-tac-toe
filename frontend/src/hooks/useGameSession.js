import { create } from "zustand";

const useGameSession = create((set) => ({
  sessionId: "",
  onStartSession: () => set({ sessionId: "" }),
  onStopSession: () => set({ sessionId: "" }),
}));

export default useGameSession;
