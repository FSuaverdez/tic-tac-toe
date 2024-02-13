import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";
import ChooseName from "./ChooseName";
import MainMenu from "./MainMenu";
import PlayGame from "./PlayGame";

const MainGame = () => {
  const { isPlaying, isContinuePending } = useGameState();
  const { isChoosePlayerName } = usePlayerState();
  return (
    <div>
      {!isPlaying && !isContinuePending && <MainMenu />}
      {isChoosePlayerName && <ChooseName />}
      {(isPlaying || isContinuePending) && <PlayGame />}
    </div>
  );
};

export default MainGame;
