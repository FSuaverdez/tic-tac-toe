import useGameState from "../hooks/useGameState";
import usePlayerState from "../hooks/usePlayerState";

const ChooseName = () => {
  const { player1Name, player2Name, setPlayerName, clearName, setChooseName } =
    usePlayerState();

  const { onStop } = useGameState();
  return (
    <div className="flex justify-center items-center mt-10 flex-col gap-20">
      <div className="flex flex-col justify-center items-center gap-2">
        <label
          htmlFor="player1"
          className=" font-primary text-3xl font-bold text-blue-500"
        >
          Player 1 Name
        </label>
        <input
          type="text"
          className="px-4 py-2 font-primary font-bold bg-slate-100 rounded"
          value={player1Name}
          name="player1"
          onChange={(e) => setPlayerName(e.target.value, 1)}
          required
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <label
          htmlFor="player1"
          className=" font-primary text-3xl font-bold text-red-500"
        >
          Player 2 Name
        </label>
        <input
          type="text"
          className="px-4 py-2 font-primary font-bold bg-slate-100 rounded"
          value={player2Name}
          name="player2"
          onChange={(e) => setPlayerName(e.target.value, 2)}
          required
        />
      </div>
      <div className="flex justify-around items-center gap-5">
        <button
          className="px-2 py-1 bg-red-800 rounded hover:bg-red-700 font-bold text-white text-xl"
          onClick={() => {
            clearName();
            setChooseName(false);
            onStop();
          }}
        >
          Back
        </button>
        <button
          className="px-2 py-1 bg-cyan-600 rounded hover:bg-cyan-400 font-bold text-white text-xl"
          onClick={() => {
            if (player1Name === "" || player2Name === "") return;

            if (player1Name === player2Name) {
              alert("Player 1 and Player 2 name cannot be same");
              return;
            }

            setChooseName(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChooseName;
