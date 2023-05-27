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
        <i className="fa-solid fa-house icon"></i>
      ) : currentSquare !== null && squareArray[index].type === "well" ? (
        <i className="fa-solid fa-oil-well icon"></i>
      ) : currentSquare !== null && squareArray[index].type === "grain-farm" ? (
        <i className="fa-solid fa-sun-plant-wilt icon"></i>
      ) : currentSquare !== null && squareArray[index].type === "brain-farm" ? (
        <i className="fa-solid fa-industry icon"></i>
      ) : currentSquare !== null &&
        squareArray[index].type === "lumber-mill" ? (
        <i className="fa-solid fa-tree-city icon"></i>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Tile;
