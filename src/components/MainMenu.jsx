import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";
import Board from "./Board";

const MainMenu = () => {
  const { onStart, isContinuePending, isPlaying } = useGameState();
  const { setChooseName } = usePlayerState();
  const sampleBoardState = ["X", "", "O", "X", "O", "", "X", "X", "O"];

  return (
    <div className="flex justify-center items-center mt-10">
      {!isPlaying && !isContinuePending && (
        <div>
          <Board boardState={sampleBoardState} disabled={true} />
          <div className="flex items-center justify-center mt-16">
            <button
              className="px-2 py-1 bg-cyan-800 rounded hover:bg-cyan-700 font-bold text-white text-xl"
              onClick={() => {
                onStart();
                setChooseName(true);
              }}
            >
              Start New Game
            </button>
          </div>
          <p className="text-gray-400 max-w-md mt-10 leading-loose text-center">
            The game is played on a grid that&apos;s 3 squares by 3 squares. You
            are X, your friend is O. Players take turns putting their marks in
            empty squares. The first player to get 3 of her marks in a row (up,
            down, across, or diagonally) is the winner.
          </p>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
