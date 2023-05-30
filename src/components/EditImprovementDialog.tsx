import { useEffect, useState } from "react";
import Improvement from "../Models/Improvement";
import { benefit } from "../utils/benefit";
import { costs } from "../utils/cost";
import "./EditImprovementDialog.css";

interface Prop {
  updateLevel: () => void;
  squareArray: Improvement[];
  currentSquare: number | null;
  updateType: string;
  cancel: () => void;
  downgrade: () => void;
  remove: () => void;
  display: boolean;
}

const EditImprovementDialog = ({
  updateLevel,
  squareArray,
  currentSquare,
  updateType,
  cancel,
  downgrade,
  remove,
  display,
}: Prop) => {
  const [resource, setResource] = useState(costs[0]);
  const [addBenefit, setAddBenefit] = useState(benefit[0]);

  useEffect(() => {
    if (updateType === "house") {
      setResource(costs[0]);
    } else if (updateType === "well") {
      setResource(costs[1]);
    } else if (updateType === "grain-farm") {
      setResource(costs[2]);
    } else if (updateType === "brain-farm") {
      setResource(costs[3]);
    } else if (updateType === "lumber-mill") {
      setResource(costs[4]);
    }
    if (updateType === "house") {
      setAddBenefit(benefit[0]);
    } else if (updateType === "grain-farm") {
      setAddBenefit(benefit[1]);
    } else if (updateType === "brain-farm") {
      setAddBenefit(benefit[2]);
    } else if (updateType === "lumber-mill") {
      setAddBenefit(benefit[3]);
    } else if (updateType === "well") {
      setAddBenefit(benefit[4]);
    }
  }, [updateType]);

  console.log(updateType);
  return (
    <section
      className={`EditImprovementDialog ${
        display === true ? " clickedEdit" : ""
      }`}
    >
      <div>
        <div className="edit-title">
          <h2>Edit Improvements</h2>
        </div>
        <div className="edit-improvements">
          <p className="edit-label">Type:</p>
          <p>{currentSquare !== null && squareArray[currentSquare].type}</p>
        </div>
        <div className="edit-improvements">
          <p className="edit-label">Level:</p>
          <p>
            {currentSquare !== null && squareArray[currentSquare].level + 1}
          </p>
        </div>
        <div className="edit-improvements">
          <p className="edit-label">Benefit:</p>
          <p>
            {addBenefit.benefitNum} {addBenefit.benefitStr}
          </p>
        </div>
        <div className="edit-improvements">
          <p className="edit-label">Cost:</p>
          <div className="edit-cost">
            <p className="edit-box">{resource.lumber} lumber</p>
            <p className="edit-box">{resource.water} Water</p>
            <p className="edit-box">{resource.grain} Grain</p>
            <p className="edit-box">{resource.brain} Unturned</p>
          </div>
        </div>
      </div>
      <div className="edit-button-container">
        <button className="edit-button" onClick={updateLevel}>
          Upgrade
        </button>
        <button
          className="edit-button"
          disabled={
            currentSquare !== null && squareArray[currentSquare].level < 2
          }
          onClick={downgrade}
        >
          Downgrade
        </button>
        <button className="edit-button" onClick={remove}>
          Remove
        </button>
        <button className="edit-button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </section>
  );
};

export default EditImprovementDialog;
