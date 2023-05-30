import ResourcesModel from "../Models/ResourcesModel";
import "./GameOver.css";

const GameOver = () => {
  return (
    <div className="GameOver">
      <div className="gameOverDiv">
        <h2>You Lose</h2>
        <form>
          <button>New Game</button>
        </form>
      </div>
    </div>
  );
};

export default GameOver;
