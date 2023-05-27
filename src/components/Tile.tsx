import Improvement from "../Models/Improvement";
import "./Tile.css";

interface Prop {
  setDisplay: () => void;
  squareArray: Improvement[];
  currentSquare: number | null;
  index: number;
}
const Tile = ({ setDisplay, squareArray, currentSquare, index }: Prop) => {
  // console.log(squareArray);
  // console.log(currentSquare);
  // console.log(squareArray[currentSquare].type);

  return (
    <div className="Tile" onClick={() => setDisplay()}>
      {currentSquare !== null && squareArray[index].type === "house" ? (
        <p>house</p>
      ) : currentSquare !== null && squareArray[index].type === "well" ? (
        <p>well</p>
      ) : currentSquare !== null && squareArray[index].type === "grain-farm" ? (
        <p>grain farm</p>
      ) : currentSquare !== null && squareArray[index].type === "brain-farm" ? (
        <p>brain farm</p>
      ) : currentSquare !== null &&
        squareArray[index].type === "lumber-mill" ? (
        <p>lumber mill</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Tile;
