import { create } from "zustand";
import { devtools } from "zustand/middleware";
import useGameState from "./useGameState";
import useGameSummaryState from "./useGameSummaryState";
import usePlayerState from "./usePlayerState";

const useBoardState = create(
  devtools(
    (set, get) => ({
      boardState: ["", "", "", "", "", "", "", "", ""],
      onPlay: (play, index) => {
        const boardState = get().boardState;
        boardState[index] = play;
        set({ boardState });
        const winner = checkWinner(boardState);
        useGameState.getState().incrementPlayCount();
        if (winner) {
          const playerWin =
            usePlayerState.getState().player1Side === winner ? 1 : 2;

          const playerLose =
            usePlayerState.getState().player1Side !== winner ? 1 : 2;
          console.log("Winner", playerWin);
          console.log("Loser", playerLose);
          const winnerName =
            playerWin === 1
              ? usePlayerState.getState().player1Name
              : usePlayerState.getState().player2Name;
          const winnerColor =
            playerWin === 1 ? "text-blue-500" : "text-red-500";

          const matchData = {
            boardState: get().boardState,
            winnerPlayerNumber: playerWin,
            winner: winnerName,
            player1Name: usePlayerState.getState().player1Name,
            player2Name: usePlayerState.getState().player2Name,
          };

          console.log("Match Data", matchData);

          useGameSummaryState.getState().setWinner(winnerName);
          useGameSummaryState.getState().setColor(winnerColor);
          usePlayerState.getState().onWin(playerWin);
          usePlayerState.getState().onLose(playerLose);
          usePlayerState.getState().swapPlaySide();
          useGameState.getState().swapFirstTurn();
          useGameState.getState().incrementRound();
          useGameState.getState().resetPlayCount();
          useGameState.getState().onRoundEnd();
          get().onClear();

          return;
        }
        if (useGameState.getState().playCount === 9 && !winner) {
          usePlayerState.getState().onDraw();
          usePlayerState.getState().swapPlaySide();
          useGameState.getState().incrementRound();
          useGameState.getState().swapFirstTurn();
          useGameState.getState().incrementRound();
          useGameState.getState().resetPlayCount();
          useGameState.getState().onRoundEnd();
          useGameSummaryState.getState().setWinner("Draw");
          useGameSummaryState.getState().setColor("text-white");
          get().onClear();
          return;
        }

        const nextPlayerTurn = useGameState.getState().playerTurn === 1 ? 2 : 1;

        useGameState.getState().setPlayerTurn(nextPlayerTurn);
      },
      onClear: () => set({ boardState: ["", "", "", "", "", "", "", "", ""] }),
    }),
    { name: "boardSate" }
  )
);

const checkWinner = (boardState) => {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
};

export default useBoardState;
