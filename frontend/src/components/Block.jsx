import PropTypes from "prop-types";
import useBoardState from "../hooks/useBoardState";

const Block = (props) => {
  const { index, handleClick } = props;
  const { boardState } = useBoardState();

  return (
    <div
      className="p-3 w-32 h-32 border-white rounded-3xl border-4 flex justify-center items-center"
      onClick={() => handleClick(index)}
    >
      <div className="text-white text-5xl font-bold font-primary">
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
