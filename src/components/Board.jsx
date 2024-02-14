import useBoardState from "../hooks/useBoardState";
import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";
import Block from "./Block";
import PropTypes from "prop-types";

const Board = ({ boardState, disabled }) => {
  const { isPlaying, isContinuePending, playCount, playerTurn } =
    useGameState();
  const { onPlay } = useBoardState();
  const { player1Side, player2Side } = usePlayerState();

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
        <Block
          boardState={boardState}
          index={0}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Block
          boardState={boardState}
          index={1}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Block
          boardState={boardState}
          index={2}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Block
          boardState={boardState}
          index={3}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Block
          boardState={boardState}
          index={4}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Block
          boardState={boardState}
          index={5}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Block
          boardState={boardState}
          index={6}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Block
          boardState={boardState}
          index={7}
          handleClick={handleClick}
          disabled={disabled}
        />
        <Block
          boardState={boardState}
          index={8}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

Board.propTypes = {
  boardState: PropTypes.array,
  disabled: PropTypes.bool,
};

export default Board;
