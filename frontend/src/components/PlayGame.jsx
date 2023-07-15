import usePlayerState from "../hooks/usePlayerState";
import Board from "./Board";

const PlayGame = () => {
  const { isChoosePlayerName, player1Name, player2Name } = usePlayerState();
  return (
    <div>
      {!isChoosePlayerName && (
        <>
          <div className="flex justify-between max-w-xl items-center m-auto">
            <div className="font-bold text-blue-500 text-2xl">
              {player1Name}
            </div>
            <div className="font-bold text-red-500 text-2xl">{player2Name}</div>
          </div>
          <Board />
        </>
      )}
    </div>
  );
};

export default PlayGame;
