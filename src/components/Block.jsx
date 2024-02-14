import PropTypes from "prop-types";
import usePlayerState from "../hooks/usePlayerState";

const Block = (props) => {
  const { index, handleClick, boardState, disabled } = props;

  const { player1Side, player2Side } = usePlayerState();

  return (
    <div
      className={`p-3 lg:w-32 lg:h-32 h-20 w-20 border-gray-500 rounded-3xl border-4 flex justify-center items-center ${
        !boardState[index] && !disabled
          ? "cursor-pointer hover:border-gray-100"
          : boardState[index] && !disabled
          ? "cursor-not-allowed"
          : "cursor-default"
      } `}
      onClick={() => {
        if (disabled) return;
        handleClick(index);
      }}
    >
      <div
        className={` text-5xl font-bold font-primary ${
          player1Side === boardState[index]
            ? "text-blue-500"
            : player2Side === boardState[index]
            ? "text-red-500"
            : "text-white"
        }`}
      >
        {boardState[index]}
      </div>
    </div>
  );
};

Block.propTypes = {
  index: PropTypes.number,
  handleClick: PropTypes.func,
  boardState: PropTypes.array,
  disabled: PropTypes.bool,
};

export default Block;
