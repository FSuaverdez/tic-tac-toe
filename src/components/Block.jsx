import PropTypes from "prop-types";
import useBoardState from "../hooks/useBoardState";
import usePlayerState from "../hooks/usePlayerState";

const Block = (props) => {
  const { index, handleClick } = props;
  const { boardState } = useBoardState();
  const { player1Side, player2Side } = usePlayerState();

  return (
    <div
      className={`p-3 w-32 h-32 border-gray-500 rounded-3xl border-4 flex justify-center items-center ${
        !boardState[index]
          ? "cursor-pointer hover:border-gray-100"
          : "cursor-not-allowed"
      }`}
      onClick={() => handleClick(index)}
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
};

export default Block;
