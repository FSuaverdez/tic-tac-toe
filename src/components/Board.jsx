import useBoardState from "../hooks/useBoardState";
import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";
import Block from "./Block";

const Board = () => {
  const { isPlaying, isContinuePending, playCount, playerTurn } =
    useGameState();
  const { onPlay } = useBoardState();
  const { player1Side, player2Side } = usePlayerState();
  const { boardState } = useBoardState();

  const handleClick = (index) => {
    if (!isPlaying || isContinuePending) {
      return;
    }
    if (playCount === 9) {
      return;
    }
    if (boardState[index]) {
      return;
    }
    const play = playerTurn === 1 ? player1Side : player2Side;

    onPlay(play, index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-5">
      <div className="flex justify-center items-center gap-3">
        <Block index={0} handleClick={handleClick} />
        <Block index={1} handleClick={handleClick} />
        <Block index={2} handleClick={handleClick} />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Block index={3} handleClick={handleClick} />
        <Block index={4} handleClick={handleClick} />
        <Block index={5} handleClick={handleClick} />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Block index={6} handleClick={handleClick} />
        <Block index={7} handleClick={handleClick} />
        <Block index={8} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Board;
