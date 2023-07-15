import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";

const MainMenu = () => {
  const { onStart, isContinuePending, isPlaying } = useGameState();
  const { setChooseName } = usePlayerState();

  return (
    <div className="flex justify-center items-center mt-10">
      {!isPlaying && !isContinuePending && (
        <div>
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
      )}
    </div>
  );
};

export default MainMenu;
