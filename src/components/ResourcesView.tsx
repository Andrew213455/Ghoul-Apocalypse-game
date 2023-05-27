import Improvement from "../Models/Improvement";
import ResourcesModel from "../Models/ResourcesModel";
import ResourceLine from "./ResourceLine";
import "./ResourcesView.css";

interface Prop {
  resourceLine: ResourcesModel;
  squareArray: Improvement[];
  currentSquare: number | null;
}

const ResourcesView = ({ resourceLine, squareArray, currentSquare }: Prop) => {
  return (
    <div className="ResourcesView">
      <div className="resourceContainer">
        <ResourceLine
          resourceLine={resourceLine}
          squareArray={squareArray}
          currentSquare={currentSquare}
        />
      </div>
    </div>
  );
};

export default ResourcesView;
