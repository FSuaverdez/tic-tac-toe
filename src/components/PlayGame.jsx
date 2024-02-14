import useBoardState from "../hooks/useBoardState";
import useGameState from "../hooks/useGameState";
import useGameSummaryState from "../hooks/useGameSummaryState";
import usePlayerState from "../hooks/usePlayerState";
import Board from "./Board";
import Overlay from "./Overlay";

const PlayGame = () => {
  const {
    isChoosePlayerName,
    player1Name,
    player2Name,
    player1Wins,
    player2Wins,
    player1Losses,
    player2Losses,
    draw,
  } = usePlayerState();
  const {
    playerTurn,
    roundNo,
    isContinuePending,
    onRoundStart,
    onEndGame,
    showEndGameStats,
  } = useGameState();
  const { winner, textColor } = useGameSummaryState();
  const { boardState, resetBoard } = useBoardState();

  const player = playerTurn === 1 ? player1Name : player2Name;
  const playerColor = playerTurn === 1 ? "text-blue-500" : "text-red-500";
  return (
    <div>
      {!isChoosePlayerName && (
        <>
          <div className="flex justify-center max-w-xl items-center m-auto">
            <div className="flex flex-col justify-center items-center">
              <p className="font-primary font-bold text-white text-3xl">
                Round
              </p>
              <p className="font-primary font-bold text-white text-2xl">
                {roundNo}
              </p>
            </div>
          </div>
          <div className="flex justify-between max-w-xl items-center m-auto">
            <div className="font-bold text-blue-500 text-3xl">
              <p> {player1Name}</p>
              <div className="flex flex-col ">
                <p className="text-white text-xs lg:text-lg font-primary">
                  Wins: {player1Wins}
                </p>
                <p className="text-white text-xs lg:text-lg font-primary">
                  Losses: {player1Losses}
                </p>
                <p className="text-white text-xs lg:text-lg font-primary">
                  Draws: {draw}
                </p>
              </div>
            </div>
            <div className="font-bold text-red-500 text-3xl">
              <p> {player2Name}</p>
              <div className="flex flex-col ">
                <p className="text-white text-xs lg:text-lg font-primary">
                  Wins: {player2Wins}
                </p>
                <p className="text-white text-xs lg:text-lg font-primary">
                  Losses: {player2Losses}
                </p>
                <p className="text-white text-xs lg:text-lg font-primary">
                  Draws: {draw}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <h3
              className={`${playerColor} font-bold text-4xl`}
            >{`${player}'s Turn`}</h3>
          </div>
          <Board boardState={boardState} />
          <div className="flex justify-center mt-16">
            <button
              className="px-2 py-1 bg-red-800 rounded hover:bg-red-700 font-bold text-white text-xl"
              onClick={() => {
                onEndGame();
                resetBoard();
              }}
            >
              End Game
            </button>
          </div>
          {isContinuePending && !showEndGameStats && (
            <Overlay>
              <div>
                <div className="flex justify-around items-center gap-5 mb-10">
                  <h3
                    className={`${textColor} text-5xl font-bold font-primary`}
                  >
                    {winner === "Draw" ? "Draw" : `${winner} Won!`}
                  </h3>
                </div>
                <div className="flex justify-around items-center gap-5">
                  <button
                    className="px-2 py-1 bg-red-800 rounded hover:bg-red-700 font-bold text-white text-xl"
                    onClick={() => {
                      onEndGame();
                    }}
                  >
                    Stop
                  </button>
                  <button
                    className="px-2 py-1 bg-cyan-800 rounded hover:bg-cyan-700 font-bold text-white text-xl"
                    onClick={() => {
                      onRoundStart();
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </Overlay>
          )}
        </>
      )}
    </div>
  );
};

export default PlayGame;
