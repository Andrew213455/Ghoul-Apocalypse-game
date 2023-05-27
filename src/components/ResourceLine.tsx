import Improvement from "../Models/Improvement";
import ResourcesModel from "../Models/ResourcesModel";
import "./ResourceLine.css";

interface Prop {
  resourceLine: ResourcesModel;
  squareArray: Improvement[];
  currentSquare: number | null;
}

const ResourceLine = ({ resourceLine, squareArray, currentSquare }: Prop) => {
  return (
    <div className="ResourceLine">
      <div className="default">
        <div className="title-logo">
          <h3>Lumber</h3>
          <i className="fa-solid fa-tree"></i>
        </div>
        <p>{resourceLine.lumberMill}</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Grain</h3>
          <i className="fa-solid fa-wheat-awn"></i>
        </div>
        <p>{resourceLine.grainFarm}</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Water</h3>
          <i className="fa-solid fa-droplet"></i>
        </div>
        <p>{resourceLine.well}</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Brainz</h3>
          <i className="fa-solid fa-brain"></i>
        </div>
        <p>{resourceLine.brainFarm}</p>
      </div>
      <div className="default">
        <div className="title-logo">
          <h3>Zombiez</h3>
          <i className="fa-solid fa-person"></i>
        </div>
        <p>{resourceLine.house}</p>
      </div>
    </div>
  );
};

export default ResourceLine;
