import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useGameSessionState = create(
  devtools(
    (set) => ({
      sessionId: "",
      onStartSession: () => set({ sessionId: "" }),
      onStopSession: () => set({ sessionId: "" }),
    }),
    { name: "gameSessionState" }
  )
);

export default useGameSessionState;
