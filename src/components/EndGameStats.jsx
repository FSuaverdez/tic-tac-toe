import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";

const EndGameStats = () => {
  const {
    player1Name,
    player2Name,
    player1Wins,
    player2Wins,
    player1Losses,
    player2Losses,
    draw,
    resetPlayerState,
  } = usePlayerState();
  const { onResetGame } = useGameState();

  const winner = player1Wins > player2Wins ? player1Name : player2Name;
  const winnerSide = player1Wins > player2Wins ? "p1" : "p2";
  const isDraw = player1Wins === player2Wins;

  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-20 max-w-xl mx-auto">
      <div className="flex justify-center items-center flex-col gap-2">
        <h2
          className={`font-primary font-bold text-3xl lg:text-5xl text-white mt-10`}
        >
          {isDraw ? (
            "Draw!!"
          ) : (
            <h3
              className={`${
                winnerSide === "p1"
                  ? "text-blue-500"
                  : winnerSide === "p2"
                  ? "text-red-500"
                  : "text-white"
              }`}
            >
              {winner} Won!!
            </h3>
          )}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-w-xl items-center m-auto w-full">
        <div className="font-bold text-blue-500 text-3xl text-center lg:text-left ">
          <p> {player1Name}</p>
          <div className="flex flex-col ">
            <p className="text-white text-base font-primary">
              Wins: {player1Wins}
            </p>
            <p className="text-white text-base font-primary">
              Losses: {player1Losses}
            </p>
            <p className="text-white text-base font-primary">Draws: {draw}</p>
          </div>
        </div>
        <div className="font-bold text-red-500 text-3xl text-center lg:text-left mt-10 lg:mt-0">
          <p> {player2Name}</p>
          <div className="flex flex-col ">
            <p className="text-white text-base font-primary">
              Wins: {player2Wins}
            </p>
            <p className="text-white text-base font-primary">
              Losses: {player2Losses}
            </p>
            <p className="text-white text-base font-primary">Draws: {draw}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="px-2 py-1 bg-cyan-800 rounded hover:bg-cyan-700 font-bold text-white text-xl"
          onClick={() => {
            onResetGame();
            resetPlayerState();
          }}
        >
          Back to Main Menu
        </button>
      </div>
    </div>
  );
};

export default EndGameStats;
