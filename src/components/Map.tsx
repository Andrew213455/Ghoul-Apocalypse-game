import "./Map.css";
import Tile from "./Tile";
import Improvement from "../Models/Improvement";

interface Prop {
  improvements: Improvement[];
  setDisplay: (setCurrentSquare: number) => void;
  squareArray: Improvement[];
  currentSquare: number | null;
  editType: (type: string) => void;
}

const Map = ({
  improvements,
  setDisplay,
  squareArray,
  currentSquare,
  editType,
}: Prop) => {
  if (currentSquare !== null) {
    editType(squareArray[currentSquare].type);
  }
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
