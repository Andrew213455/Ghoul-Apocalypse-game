import "./Map.css";
import Tile from "./Tile";
import Improvement from "../Models/Improvement";

interface Prop {
  improvements: Improvement[];
  setDisplay: (setCurrentSquare: number) => void;
  squareArray: Improvement[];
  currentSquare: number | null;
}

const Map = ({
  improvements,
  setDisplay,
  squareArray,
  currentSquare,
}: Prop) => {
  return (
    <div className="Map">
      {improvements.map((box, index) => (
        <Tile
          key={index}
          setDisplay={() => setDisplay(index)}
          squareArray={squareArray}
          currentSquare={currentSquare}
          index={index}
        />
      ))}
    </div>
  );
};

export default Map;
