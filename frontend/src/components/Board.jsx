import Block from "./Block";

const Board = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-5">
      <div className="flex justify-center items-center gap-3">
        <Block />
        <Block />
        <Block />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Block />
        <Block />
        <Block />
      </div>
      <div className="flex justify-center items-center gap-3">
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

export default Board;
