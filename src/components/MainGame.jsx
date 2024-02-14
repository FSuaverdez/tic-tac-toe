import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";
import ChooseName from "./ChooseName";
import EndGameStats from "./EndGameStats";
import MainMenu from "./MainMenu";
import PlayGame from "./PlayGame";

const MainGame = () => {
  const { isPlaying, isContinuePending, showEndGameStats } = useGameState();
  const { isChoosePlayerName } = usePlayerState();
  return (
    <div className="px-4 md:px-8">
      {!isPlaying && !isContinuePending && !showEndGameStats && <MainMenu />}
      {!isPlaying && showEndGameStats && <EndGameStats />}
      {isChoosePlayerName && <ChooseName />}
      {(isPlaying || isContinuePending) && !showEndGameStats && <PlayGame />}
    </div>
  );
};

export default MainGame;
